import React from 'react'
import TextEditor from "../components/texteditor"
import ChatRoom from "../components/chat"
import Video from "../components/video"
import Questions from '../components/questions'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
export default function InterviewPage() {

  
  return (
    <div>
       
    <div style={{display:"flex", width:"100%", height:"3vh" , zIndex:2 , backgroundColor:"grey"}}>
      <div></div>
    </div>
    <div style={{display:'flex', flexDirection:'row', width:"100%", height:"100vh", justifyContent:'flex-start'}}>
    <div style={{backgroundColor:"blue", width:"50%", height:"100%"}}>
   <TextEditor/>
    </div>
    <div style={{backgroundColor:"purple", width:"50%", height:"100%"}}>
    <div  style={{height:"30%", backgroundColor:"grey"}}>
        <Video/>
    </div>
    <div style={{display:'flex', flexDirection:'row', height:"70%" ,width: "100%", justifyContent:'flex-start'}} >
  
    <div style={{ backgroundColor:"white", width: "60%" , height:"100%"}}>
    <Questions/>

    </div>
    <div style={{width: "40%"}}>
        <ChatRoom/>

    </div>
   
    </div>
  
  

    </div>

    </div>
    </div>
  )
}
