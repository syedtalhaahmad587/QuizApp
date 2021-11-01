import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button, Typography, Grid } from "@mui/material";


const ShowRadio = (props) => {
  const [questions, setQuestions] = useState([
    {
      question: "The major language of World Wide Web is:",
      answer: ["HTML", "PHP", "JAVA", "ASP.NET",],
      correct: "0"
    },

    {
      question: "HTML is an abbreviation for?",
      answer: ["HiTech Meaningful Language", "HyperText Meaningful Language", "HiTech Markup Language", "HyperText Markup Language",],
      correct: "3"
    },

    {
      question: "The attribute of form tag is/are:",
      answer: ["Method", "Action", "Both a and b", "None of the mentioned above",],
      correct: "3"
    },

    {
      question: "The latest HTML standard is:",
      answer: ["XML", "SGML", "HTML 4.0", "HTML 5.0"],
      correct: "3",
    },

  ]);
  //    const [ShowResult, setShowResult] = useState(false)
  const [showResult , setShowResult] = useState(false)
  const [questionInd, setquestionInd] = useState(0)
  const [marks, setmarks] = useState(0);
  const quiz_attempt = () => {
    setquestionInd(questionInd + 1)

  }

  const changeSelection = (value) => {
    console.log(value)
    questions[questionInd].selected = value;
    setQuestions([...questions]);
    
    
  }
  const Submit = () => {
    var total = 0;
    for (let k = 0; k < questions.length; k++) {
      if (questions[k].correct === questions[k].selected) {
         total++;
      }
      
    }
    setmarks(total);
    setShowResult(true)
    


  }
  return (
    <>
    
    {showResult ? ( 
          <Grid>     
           <Typography variant="h3">{marks}</Typography> 
           
      </Grid>
      ): <Grid>
      <Grid>
        <Typography md={12} >
          <center className="my-3" >{questions[questionInd].question}</center>
        </Typography>
      </Grid>
      <FormControl component="fieldset">
        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
          <Grid className="p-3" container>
            {questions[questionInd].answer.map((e, i) => (
              <Grid md={6} key={i} >
                <Typography variant="h5" key={i}>
                  <FormControlLabel value={i} control={<Radio />} onChange={(e) => changeSelection(e.target.value)} checked={i == questions[questionInd].selected} label={e} />
                </Typography>
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </FormControl>
      <Grid>
        {
          questionInd === questions.length - 1 ? <center>
            <Button variant="contained" color="warning" onClick={Submit}>Submit</Button>
          </center> : <center>
            <Button variant="contained" color="warning" onClick={quiz_attempt}>Next</Button>
          </center>
        }

      </Grid>
      
    </Grid>}
     </>
  );
}
export default ShowRadio;