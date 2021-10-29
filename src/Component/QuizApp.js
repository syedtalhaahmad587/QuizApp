import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button , Typography, Grid } from "@mui/material";
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import ShowRadio from "../Component/ShowRadio"
const QuizApp = () => {
   

  //  const NextData = () => {
  //    setquestionInd(questionInd + 1)
  //  }
    return (
        <>
            <div className="MainDiv">
                <p>Quiz App</p>
            </div>
            <center>
                <ShowRadio /> 
            </center>
            
        </>
    )
}

export default QuizApp
