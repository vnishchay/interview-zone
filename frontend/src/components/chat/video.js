import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from "@material-ui/icons/Phone";
import React, { useEffect, useRef, useState } from "react";
import Peer from "simple-peer";
import sock from "../..";
import "./video.css";
import { useParams } from "react-router";
// import UserTile from "../usertile/userTile";
import UserTile from "../usertile/userTile";

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
  const [isvedio, setisvedio] = useState(false);

  useEffect(() => {
    sock.emit("video-call", videoID);
    sock.on("callUser", (data) => {
      setisvedio(true);
      setReceivingCall(true);
      setName(data.name);
      setCallerSignal(data.signal);
    });

    sock.on("audiocallUser", (data) => {
      setReceivingCall(true);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: isvedio, audio: true })
      .then((stream) => {
        setStream(stream);
        myVideo.current.srcObject = stream;
      });
  }, [isvedio]);

  const callUser = () => {
    setisvedio(true);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
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

  const audiocallUser = () => {
    setisvedio(false);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      sock.emit("audiocallUser", {
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
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
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
    setisvedio(false);
    setCallEnded(true);
    // connectionRef.current.removeAllListeners('close');
    connectionRef.current.destroy();
  };

  return (
    <div
      className="root-container"
      style={{ display: "flex", flexDirection: "row", height: "100%" }}
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
            <UserTile name={"nishchay"} />
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
          <IconButton
            color="primary"
            aria-label="call"
            onClick={() => audiocallUser()}
          >
            <PhoneIcon fontSize="small" />
          </IconButton>
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
