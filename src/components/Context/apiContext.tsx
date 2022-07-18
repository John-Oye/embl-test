
import { createContext, useContext, useEffect, useState } from 'react';
import { fetchDataAndParseCSV} from '../../utility/DataUtilityClass';


export const APIContext = createContext<any | null>(null);



function APIContextProvider({ children }:any) {
    // Initialize state
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isFilter, setIsFilter] = useState(false);
    const genes:Array<string> = [];
    const diagnosis:Array<string> = [];

    // Filters
    const [selectedGene, setSelectedGene] = useState<any>([]);
    const [selectedDiagnosis, setSelectedDiagnosis] = useState([]);

    const geneArray = selectedGene.map((item:any) => item.value);
    const diagnosisArray = selectedDiagnosis.map((item:any) => item.value);
    // const categoryArray = selectedCategory.map((item) => item.value);

    // Fetch data
    const getData = () => {
        let expressionData = [];
        fetchDataAndParseCSV().then((result:any) => {
              // Get the dataset
              expressionData = result.data;
              // console.log(expressionData);
              // console.log(JSON.stringify(expressionData));


              let finalData:any = []


                  for(let i = 0; i < expressionData.length; i++) {

                    let d: any = {}
                  
                      d["id"] = expressionData[i]["gene_symbol"];
                      d["diagnosis"] = expressionData[i]["diagnosis"];
                      d["model_id"] = expressionData[i]["model_id"];
                      d["z_score"] = expressionData[i]["z_score"];
                      d['data'] = []
                      let point: any = {}
                      point["x"] = expressionData[i]["model_id"];
                      point["y"] = expressionData[i]["z_score"];
                      d['data'].push(point)
                      finalData.push(d)
                  }
                  setData(finalData);
            }).then(() => {
                setIsLoading(false);
            }) .then((err) => console.error(err));
    };


    useEffect(() => {
        getData();
    }, []);


    const newData = data.map((d:any) => {
        const properties = {
            ...d,
            Gene: +d.id,
            Diagnosis: +d.diagnosis,
            Model: +d.model_id,
            Z_Score: +d.z_score,
            
        };
        return properties;
    });

    // Filter data by Gene & DiagnosisArray
    const filteredData = newData.filter(
        (d:any) => 
                // d.id = selectedGene ,
            geneArray.includes(d.id) &&
            diagnosisArray.includes(d.Diagnosis),  
    );




    const uniqueGenes = newData.filter((element: { id: string; }) => {
    const isDuplicate = genes.includes(element.id);

    if (!isDuplicate) {
      genes.push(element.id);
      return true;
    }

    return false;
  });

  
     const uniqueDiagnosis = newData.filter((element: { diagnosis: string; }) => {
    const isDuplicate = diagnosis.includes(element.diagnosis);

    if (!isDuplicate) {
      diagnosis.push(element.diagnosis);

      return true;
    }
    return false;
  });

    const geneList = uniqueGenes.map((e:any) =>  e.id);
    const diagnosisList = uniqueDiagnosis.map((e:any) =>  e.diagnosis);

  


    // const uniqueArrayRegion = uniqueArray(data, 'model_id');


    return (
        <APIContext.Provider
            value={{
                isLoading,
                geneList,
                diagnosisList,
                newData,
                setSelectedGene,             
                setSelectedDiagnosis,
                filteredData,
                selectedGene,
                selectedDiagnosis,
                isFilter,
                setIsFilter,
            }}
        >
            {children}{' '}
        </APIContext.Provider>
    );
}

export default APIContextProvider;

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
    const context = useContext(APIContext);
    if (context === undefined) {
        throw new Error('Context must be used within a Provider');
    }
    return context;
}
