
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

questions.map(e =>{
    console.log(e); 
})
// questions.forEach((element)=>{
//     console.log(element); 
// })

// questions.map(post =>{
//      console.log(post); 
// })

 
// 0: {_id: '614352b8560ef1bf0bebc37b', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}
// 1: {_id: '614352dd9fea475c86d68aca', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}
// 2: {_id: '614352505072cc14658db542', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}


// .map......................

// [{…}, {…}, {…}]



// 0: {_id: '614352b8560ef1bf0bebc37b', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}
// 1: {_id: '614352dd9fea475c86d68aca', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}
// 2: {_id: '614352505072cc14658db542', dateOfQuestionAddition: '16-09-2021', question: 'Given n pairs of parentheses, write a function to …rate all combinations of well-formed parentheses.', questionLevel: 'easy', questionOutput: ' hello this is output... fuck you  ', …}
// length: 3


// {experience.roles.map(function (role, i) { 
//     return <div key={i}>
//         <h5>{role.title}</h5>
//         <span>{role.startDate}</span>
//         <span>{role.location}</span>
//         <p>{role.description}</p>
//     </div>


return (
        <div className="question-container"> 
        {
        // questions.map(post => (
        // <li key={post.id} align="start">
        //               <div>
        //                   <p className="title">{post.title}</p>
        //                   <p className="body">{post.body}</p>
        //               </div>
        //       </li>
        //   ))
          }
        
      
        
        </div>
     )
}
