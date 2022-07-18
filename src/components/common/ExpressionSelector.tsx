import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from "react-bootstrap";
// import ChipArray from "./ChipArray";
// import options from '../../models/MyData.model';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useAPI } from '../Context/apiContext';


export default function ExpressionSelector(
  ) {
  const [onSliderChange, setOnSliderChange] = useState<any>([]);

   const { geneList,selectedGene,setSelectedGene,selectedDiagnosis,setSelectedDiagnosis,diagnosisList } = useAPI(); 

  return (
    
    <Box className="box">
    <Paper className="paper" elevation={12}>
    <Typography className="topo-tx" gutterBottom variant="h5" component="div">
      Expression Data Heat Map
    </Typography>
    <Divider />

    <div className="combo">
        <Form.Group style={{ width:400 }}>
                <Form.Label>List of Genes</Form.Label>
                <Typeahead
                  id="basic-typeahead-multiple"
                  multiple
                  onChange= {setSelectedGene}
                  options={geneList}
                  placeholder="Select a list of gene..."
             
                  selected={selectedGene}
                />
              </Form.Group>
              <Form.Group>
       
        <Form.Control.Feedback type="valid">Feedback</Form.Control.Feedback>
      </Form.Group>
              <Form.Group style={{ width:400 }}>
                <Form.Label>List of Diagnosis</Form.Label>
                <Typeahead
                  id="basic"
                  multiple
                  onChange={setSelectedDiagnosis}
                  options={diagnosisList}
                  placeholder="Select a list of daignosis..."
                  selected={selectedDiagnosis}
                 
                />
              </Form.Group>
     
    </div>
    <Typography
      gutterBottom
      variant="subtitle2"
      display="block"
      component="div"
      className="slider"
    >
      Filter top 10% of the gene that have the highest expression
      <Slider
        defaultValue={10}
        min={0}
        max={100}
        valueLabelDisplay="auto"
        step={10}
        marks
        onChange={onSliderChange=> {
                  setOnSliderChange(onSliderChange);
                   }}
      />
    </Typography>
  </Paper>
  </Box>
  )
}




