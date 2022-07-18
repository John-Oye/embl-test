import Papa from "papaparse";
import {
  SERVER_ENDPOINT,
} from "../components/common/Constants";

// Business logic for downloading .csv data, parsing and
// getting it into the format required by nivo.
// Also handling: adding and removing datapoints
// All class methods are pure functions and should remain so



export async function fetchDataAndParseCSV() {
  

    const promise = new Promise((resolve, reject) => {
      Papa.parse(SERVER_ENDPOINT, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (results: { data: any; }) => {
          console.log(`results for ${SERVER_ENDPOINT}`, results);
          resolve({ SERVER_ENDPOINT, data: results.data });
        },
        error: (error: { message: any; }) => {
          console.error("Error loading csv", error.message);
          reject(error.message);
        },
      });
    });

  return promise;

}


export const uniqueArray = (data:any, dimensionName:any) => [
     new Set(data.map((item: any) => item[dimensionName])),
]; // ['A', 'B', 'C']




  

  


