import React from 'react'
import { useCallback , useEffect, useState} from 'react';
import Quill from "quill"; 
import "quill/dist/quill.snow.css"
import { useParams } from "react-router-dom";
import sock from '.';

export default function Texteditor() {
  
    const {id : documentID}  = useParams(); 
    const [socket , setSocket] = useState()
    const [quill, setquill] = useState(); 

   useEffect(()=>{
       const s = sock
       setSocket(s)
       return ()=>{
           s.disconnect()
       }

   }, [])

    useEffect(() => {  
       if(socket == null || quill == null) return;
       socket.once('load-document', document =>{
           quill.setContents(document) 
           quill.enable()
       }) 
       socket.emit('get-document', documentID)
   }, [socket, quill, documentID])

     useEffect(() => {
        if(socket == null || quill == null) return
        
        const handler = (delta)=>{
            quill.updateContents(delta)
            const data = JSON.stringify(quill.getContents())
            localStorage.setItem(documentID, data);
         }
         socket.on('recv-changes', handler)
         return () => {
             socket.off('recv-changes', handler)
         }
     }, [socket, quill, documentID])


     useEffect(() => {
        if(socket == null || quill == null) return
        
        const handler = (delta, oldDelta, source)=>{
            console.log("handler")
            if(source!== 'user') return ; 
            socket.emit('send-changes', delta)
            console.log(delta)
            const data = JSON.stringify(quill.getContents())
    localStorage.setItem(documentID, data);
         }
         quill.on('text-change', handler)
         return () => {
             quill.off('text-change', handler)
         }
     }, [socket, quill, documentID])



    const wrapperref = useCallback(
       (wrapper) => {
       if(wrapper == null) return ; 
       wrapper.innerHTML = "" ; 
       const editor = document.createElement("div")
       wrapper.append(editor);  
      const q =  new Quill(editor, {theme:"snow"})
      q.disable()
      q.setText('loading ...')
      setquill(q)
    }, [])

    return (
        <div className="container" style={{display: 'flex'}} ref={wrapperref}>
        </div>    
    )
}
