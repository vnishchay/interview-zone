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
  const [initiateCall, setinitiateCall] = useState(false);

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
      .getUserMedia({ video: true, audio: true })
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
    console.log(stream)

    peer.on("signal", (data) => {
      sock.emit("callUser", {
        userToCall: videoID,
        signalData: data,
        name: name,
      });
    });
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

    console.log(stream);
    setCallAccepted(true);
    setCallEnded(false);
    peer.on("signal", (data) => {
      sock.emit("answerCall", { signal: data, to: videoID });
    });
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
    userVideo.current = undefined;
    connectionRef.current = undefined;
    myVideo.current = undefined;
    setCallerSignal(undefined);
  };

  return (
    <div className="container-2 ">
      <div className="button" style={{ width: "50 px" }}>
        <div className="b1">
          {receivingCall && !callAccepted ?
            (
              <div>
                <h1>{name} is calling...</h1>
                <button onClick={answerCall}>
                  Answer
                </button>
              </div>
            ) : null}

        </div>
        <div className="b2">

          {callAccepted && !callEnded ? (
            <button onClick={leaveCall}>
              End Call
            </button>
          ) : (<IconButton className="b12"
            color="primary"
            aria-label="call"
            onClick={() => callUser()}
          >
            <PhoneIcon fontSize="small" />
          </IconButton>
          )}

        </div>
        <div className="b3"></div>
      </div>
      <div className="v1">
        <div className="video-1 ">
          {stream ? (
            <video className="video-1"
              playsInline
              muted
              ref={myVideo}
              autoPlay
              style={{ height: "auto", width: "15em" }}
            />
          ) : (

            < div />
          )
          }
        </div>

      </div>
      <div className="v2">


        <div className="video-2">
          {/* {callAccepted && !callEnded ? */}

          <video className="video-2"
            playsInline
            ref={userVideo}
            autoPlay
            style={{ height: "auto", width: "15em" }}
          />
          {/* : null
          } */}

        </div>
      </div>
    </div>
  )
}

