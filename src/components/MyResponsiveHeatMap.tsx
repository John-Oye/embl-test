import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import { Button } from "react-bootstrap";
import MyAccordion from "./common/Accordion";
import PreLoader from "./common/PreLoader";
import { useAPI } from "./Context/apiContext";

  


export default function MyResponsiveHeatMap(
    // {data}:HeatProps
    ) {
     const { isLoading,diagnosisList, newData } = useAPI(); 
     const colors = ['danger', 'secondary', 'warning', 'info'];

    return (
        <div>
      {!isLoading ? (
        <>
        <Box className="box">
        <Paper className="paper" elevation={3}>
          
            <div className="diag">
                {  diagnosisList.map((item:any, i: number)=>{
                    return(
                    <div className="list-group" key={i}>
                      
                    <Button variant={colors[i]}>{item}</Button>
                    </div>
                    )
                })}
            </div>
            <div className="card"  style={{height: 1200 }}>
        <ResponsiveHeatMap
            data={newData}
            margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
            // valueFormat=">-.4s"
            valueFormat="0>-.3f"
            axisTop={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: -90,
                legend: '',
                legendOffset: 36
            }}
            axisRight={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Gene',
                legendPosition: 'middle',
                legendOffset: 70
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Gene',
                legendPosition: 'middle',
                legendOffset: -72
            }}
            colors={{
                type: 'diverging',
                scheme: 'red_yellow_blue',
                divergeAt: 0.5,
                minValue: -1.00000,
                maxValue: 1.00000
            }}
            emptyColor="#555555"
            legends={[
                {
                    anchor: 'bottom',
                    translateX: 0,
                    translateY: 30,
                    length: 300,
                    thickness: 8,
                    direction: 'row',
                    tickPosition: 'after',
                    tickSize: 3,
                    tickSpacing: 4,
                    tickOverlap: false,
                    tickFormat: ".1f",
                    title: 'Z-Score →',
                    titleAlign: 'middle',
                    titleOffset: 4
                }
            ]}
        />
        </div>
        <MyAccordion />
        </Paper>
  </Box>
  </>
    ) : (
                <PreLoader />
                )}
     </div>
    )
};



