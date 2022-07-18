import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cancerHeading,cancerDescription } from './Constants';



export default function MyAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{cancerHeading}</Typography>
        </AccordionSummary>
        <AccordionDetails className='alignleft'>
          <Typography>
           {cancerDescription}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}