import React from 'react'
import ResizePanel from "react-resize-panel";
import TextEditor from "../components/texteditor"
import ChatRoom from "../components/chat"
import Video from "../components/video"

export default function InterviewPage() {

  
  return (
    <div style={{display:'flex', flexDirection:'row', width:"100%", height:"100vh", justifyContent:'flex-start'}}>
    <div style={{backgroundColor:"blue", width:"50%", height:"100%"}}>
   <TextEditor/>
    </div>
    <div style={{backgroundColor:"purple", width:"50%", height:"100%"}}>
    <div  style={{height:"30%", backgroundColor:"grey"}}>
        <Video/>
    </div>
    <div style={{display:'flex', flexDirection:'row', height:"70%" ,width: "100%", justifyContent:'flex-start'}} >
  
    <div style={{ backgroundColor:"white", width: "50%"}}>
     Question Service

    </div>
    <div style={{backgroundColor:"yellow", width: "50%"}}>
        <ChatRoom/>

    </div>
   
    </div>
  
  

    </div>

    </div>
  )
}
