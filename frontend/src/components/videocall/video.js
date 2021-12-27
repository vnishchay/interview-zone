import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import sock from "../socket";
import "./video.css";
import { useParams } from "react-router";

export default function Video() {
  const { id: videoID } = useParams();
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [name, setName] = useState("");
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  // const [initiateCall, setinitiateCall] = useState(false); 
  
  useEffect(() => {

    sock.emit("video-call", videoID);
    sock.on("callUser", (data) => {
    //   setisvedio(true);
      setReceivingCall(true);
      setName(data.name);
      setCallerSignal(data.signal);
    });

    sock.on("audiocallUser", (data) => {
      setReceivingCall(true);
      setName(data.name);
      setCallerSignal(data.signal);
    });


  
      navigator.mediaDevices
      .getUserMedia({ video: true , audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });
  
       return () => {
         setStream(undefined); 
       }

  }, []);



  const callUser = () => {    
    setinitiateCall(true); 
    setCallEnded(false); 
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    console.log("stream forn callig user")
    console.log(stream)
    
    peer.on("signal", (data) => {
      sock.emit("callUser", {
        userToCall: videoID,
        signalData: data,
        name: name,
      });
    });
    console.log(userVideo  + "is uservideo")
    if (userVideo == null) return;
    peer.on("stream", (stream) => {
      userVideo.current.srcObject = stream;
    });
    sock.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };


   const answerCall = () => {
    setinitiateCall(true); 
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    console.log("stream is here"); 
    console.log(stream); 
    setCallAccepted(true);
    setCallEnded(false); 
    peer.on("signal", (data) => {
      sock.emit("answerCall", { signal: data, to: videoID });
    });
    console.log("userViedo is here"); 
    console.log(userVideo)
    if (userVideo == null) return;
    peer.on("stream", (stream) => {
  
      userVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };
  // to leave the  call
  const leaveCall = () => {
    setinitiateCall(false); 
    setCallEnded(true);
    setCallAccepted(false); 
    setReceivingCall(false); 
    userVideo.current = undefined ; 
    connectionRef.current = undefined ; 
    myVideo.current = undefined ; 
    setCallerSignal(undefined);     
  };

  return (
    <div
      className="root-container"
      style={{ display: "flex", flexDirection: "row", height: "100%" , margin:"10%"}}
    >
      <div
        className="root-container"
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "90%",
        }}
      >
        <div className="video">
          {stream ? (
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ height: "100%" }}
            />
          ) : (
            <div/>
          )}
        </div>
        <div className="video">
          {callAccepted && !callEnded ? (
            <video
              playsInline
              ref={userVideo}
              autoPlay
              style={{ height: "100%" }}
            />
          ) : null}
          {/* </div> */}
        </div>
      </div>
      <div className="myId">
        {/* <Timer time={100}/> */}
        <div className="call-button">
          {callAccepted && !callEnded ? (
            <Button variant="contained" color="secondary" onClick={leaveCall}>
              End Call
            </Button>
          ) : (
            <IconButton
              color="primary"
              aria-label="call"
              onClick={() => callUser()}
            >
              <PhoneIcon fontSize="small" />
            </IconButton>
          )}
     
        </div>
      </div>
      <div>
        {receivingCall && !callAccepted ? (
          <div className="caller">
            <h1>{name} is calling...</h1>
            <Button variant="contained" color="primary" onClick={answerCall}>
              Answer
            </Button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
