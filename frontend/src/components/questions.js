
import React from 'react'
import "../styles/questions.css"
import {useEffect, useState, useRef } from 'react';
const axios = require("axios") ; 


export default function Questions() {
    const [questions, setquestions] = useState([]);

    useEffect(() => {
        const getquestion = async()=>{
        const url = "http://localhost:3001/getquestion"; 
       
        await  axios.post(url,{
            "level": "easy" 
        }, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("jwt"), 
                },
            }).then((res) => {
                if(res.message === "Invalid Token"){
                    console.log("Invalid Token")
                }
                setquestions(res.data);
            }).catch(err => {
                console.log(err);
            })
        }
        getquestion(); 
    }, [])

    return (
        <div className="question-container" style={{height:"100%"}}> 
            {questions.map((data, key) => {
                return (
                    <div key={key} >
                        {
                         data.questionLevel + " , " + data.question }
                    </div>
                );
            })}
        </div>
    )
}