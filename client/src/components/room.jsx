import React , {useEffect, useRef} from "react"

const Room = (props)=>{
   useEffect(()=>{
       console.log(props.match.params.roomID)
       const ws = new WebSocket(`ws://localhost:8080/join?roomID=${props.match.params.roomID}`)
       ws.addEventListener('open', ()=>{
           ws.send(JSON.stringify({join:"true"}));
       })
   })

    return (
        <div>
             <video autoPlay controls={true}>

             </video>
             <video autoPlay controls={true}>

             </video>
        </div>
    )
}

export default Room; 