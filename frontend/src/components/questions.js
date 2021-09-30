
import React from 'react'
import "../styles/questions.css"
import {useEffect, useState } from 'react';
const axios = require("axios") ; 

export default function Questions() {
  
    const [questions, setquestions] = useState(); 
    useEffect(() => {
      const getquestion = async()=>{
        const url = "http://localhost:3001/getquestion" ; 
       
       await  axios.post(url,{
              "level": "easy" 
       }, {
           headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("jwt"), 
            // 'Content-Type': 'application/x-www-form-urlencoded'
           }, 
       }).then((res)=>{
            if(res.message === "Invalid Token"){
                console.log("Invalid Token")
            }
            setquestions(res.data);             
        })
    }
    getquestion(); 
}, [])
console.log(questions)

return (
        <div className="question-container"> 
        {
         
        }
        </div> 
         
     )
}
