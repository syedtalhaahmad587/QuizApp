import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Button , Typography, Grid } from "@mui/material";

const ShowRadio = (props) =>  {
    const [questions,setQuestions ] =  useState([
        {
          question: "The major language of World Wide Web is:",
          answer: ["HTML", "PHP", "JAVA", "ASP.NET",], 
          correct: 1
      },
    
      {
          question: "HTML is an abbreviation for?",
          answer: ["HiTech Meaningful Language", "HyperText Meaningful Language", "HiTech Markup Language","HyperText Markup Language",],
          correct: 4
      },
    
      {
          question: "The attribute of form tag is/are:",
          answer: ["Method","Action", "Both a and b", "None of the mentioned above", ],
          correct: 3
      },
    
      {
          question: "The latest HTML standard is:",
          answer: ["XML","SGML", "HTML 4.0","HTML 5.0"],
          correct: 4,
      },
    
       ]);
    //    const [ShowResult, setShowResult] = useState(false)
       const [questionInd, setquestionInd] = useState(0)
  const quiz_attempt = () => {
    setquestionInd(questionInd + 1)
  }
  return (
      <Grid>
      <Grid>
          <Typography md={12} > 
         <center className="my-3" >{questions[questionInd].question}</center>
        </Typography>
        </Grid>
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      <Grid className="p-3" container>
      {questions[questionInd].answer.map((e,i) => (
          <Grid  md={6} key={i} >
          <Typography  variant="h5"  key={i}>
          <FormControlLabel value={i}  control={<Radio />}  label={e}/>
         </Typography>
         </Grid>
         ))}
         </Grid>
      </RadioGroup>
    </FormControl>
    <Grid>
            <center>
            <Button variant="contained" color="warning" onClick={quiz_attempt}>Next</Button>
           </center>
            </Grid>
    </Grid>
    
  );
}
export default ShowRadio;