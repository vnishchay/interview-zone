import React from 'react'
import TextEditor from "../components/texteditor"
import ChatRoom from "../components/chat"
import Questions from '../components/questions'
import Video from '../components/video'
import { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
const axios = require("axios")

export default function InterviewPage() {

  useEffect(() => {
    console.log(" checking loigin status ")

     const checkauth = async()=>{
      try{
     console.log(" is this function getting executed? ")
     console.log(localStorage.getItem("jwt")); 
     const url = "http://localhost:3001/authstatus"
     console.log(url); 
    const res =  await  axios.post(url,{
      "level": "easy" 
}, {
  headers: {
    'Authorization': 'Bearer ' + localStorage.getItem("jwt"), 
    // 'Content-Type': 'application/x-www-form-urlencoded'
   },   }) 
     console.log(res.data); 
     if(!res.data.authrized){
                return (
                 <Redirect to="/login" />
               )
            }
          }catch (e){
              return (   <Redirect to="/login" />)          }
    } 
    checkauth(); 
 }, [])
 

return (
    <div style={{backgroundColor:"whitesmoke"}}>
    <div style={{display:'flex', flexDirection:'row', width:"100%", height:"100vh", justifyContent:'flex-start'}}>
    <div style={{ width:"50%", height:"100%", padding:"1%"}}>
   <TextEditor/>
    </div>
    <div style={{ width:"50%", height:"100%"}}>
    <div  style={{height:"30%", padding:"1%"}}>
        <Video/>
    </div>
    <div style={{display:'flex', flexDirection:'row', height:"70%" ,width: "100%", justifyContent:'flex-start'}} >
  
    <div style={{ width: "60%" , height:"100%", padding: "1%"}}>
    <Questions/>
    </div>
    <div style={{width: "40%" , padding:"1%"}}>
    <ChatRoom/>

    </div>
   
    </div>
  
  

    </div>

    </div>
    </div>
  )
}
