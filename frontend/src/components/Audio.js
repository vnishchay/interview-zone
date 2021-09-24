


// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import PhoneIcon from "@material-ui/icons/Phone"
// import React, { useEffect, useRef, useState } from "react"
// import Peer from "simple-peer"
// import sock from ".."

// import "../styles/video.css"
// import { useParams } from "react-router"

// export default function Audio() {
//     const {id: videoID} = useParams(); 
//    const [ stream, setStream ] = useState()
// 	const [ receivingCall, setReceivingCall ] = useState(false)
// 	const [ callerSignal, setCallerSignal ] = useState()
// 	const [ callAccepted, setCallAccepted ] = useState(false)
// 	const [ callEnded, setCallEnded] = useState(false)
// 	const [ name, setName ] = useState("")
// 	const myVideo = useRef()
// 	const userVideo = useRef()
// 	const connectionRef= useRef()

// 	useEffect(() => {
// 		navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
// 			setStream(stream)
// 				myVideo.current.srcObject = stream
// 		})
//         sock.emit('video-call', videoID); 
// 		sock.on("audiocallUser", (data) => {
// 			setReceivingCall(true)
// 			setName(data.name)
// 			setCallerSignal(data.signal)
// 		})
// 	}, [])

// 	const audiocallUser = (id) => {
// 		navigator.mediaDevices.getUserMedia({ video: false, audio: true }).then((stream) => {
// 			setStream(stream)
// 				myVideo.current.srcObject = stream
// 		})
// 		const peer = new Peer({
// 			initiator: true,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			sock.emit("callUser", {
// 				userToCall: videoID,
// 				signalData: data,
// 				name: name
// 			})
// 		})
// 		if(userVideo == null) return ; 
// 		peer.on("stream", (stream) => {
// 			userVideo.current.srcObject = stream	
// 		})
// 		sock.on("callAccepted", (signal) => {
// 			setCallAccepted(true)
// 			peer.signal(signal)
// 		})

// 		connectionRef.current = peer
// 	}

// 	const answerCall =() =>  {
// 		setCallAccepted(true)
// 		const peer = new Peer({
// 			initiator: false,
// 			trickle: false,
// 			stream: stream
// 		})
// 		peer.on("signal", (data) => {
// 			sock.emit("answerCall", { signal: data, to: videoID })
// 		})
// 		if(userVideo == null) return ; 
// 		peer.on("stream", (stream) => {
// 			userVideo.current.srcObject = stream
// 		})

// 		peer.signal(callerSignal)
// 		connectionRef.current = peer
// 	}

// 	const leaveCall = () => {
// 		setCallEnded(true)
// 		connectionRef.current.destroy()
// 	}

// 	return (
// 		<div>
// 		<div className="myId">
			
// 			<div className="call-button" >
// 				{callAccepted && !callEnded ? (
// 					<Button variant="contained" color="secondary" onClick={leaveCall}>
// 						End Call
// 					</Button>
// 				) : (
// 					<IconButton color="primary" aria-label="call" onClick={() => audiocallUser(videoID)}>
// 						<PhoneIcon fontSize="large" />
// 					</IconButton>
// 				)}
// 			</div>
// 		</div>
// 		<div>
// 			{receivingCall && !callAccepted ? (
// 					<div className="caller">
// 					<h1 >{name} is calling...</h1>
// 					<Button variant="contained" color="primary" onClick={answerCall}>
// 						Answer
// 					</Button>
// 				</div>
// 			) : null}
// 		</div>
// 	 </div>
// 	)
// }

