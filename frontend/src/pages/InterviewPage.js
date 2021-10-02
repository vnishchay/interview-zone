import React from "react";
import TextEditor from "../components/texteditor";
import ChatRoom from "../components/chat";
import Questions from "../components/questions";
import Video from "../components/video";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useContext, useState } from "react/cjs/react.development";
import { AppContext } from "../components/context";
import UserTile from "../components/userTile";
const axios = require("axios");

export default function InterviewPage() {
  //start interview 
  // update the interview details in interview 
  // manage the socket connections 
  // manage timer 
  // save text editor final data to db? 
  // get rating of the interview experience 
  // what if stop in between ? 
  function startInterview(){
      // timer start 
      // database upate user data
      // user id will be the object id? is that going to be safe? simply i will bcrypt the roomid and make it userid 
  }

  const [useData, setuseData] = useState()
  useEffect(()=>{
       setuseData(localStorage.getItem("appContextdata")); 
   })


  return (
    <div style={{ backgroundColor: "whitesmoke" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
          justifyContent: "flex-start",
        }}
      >

        <div style={{ width: "50%", height: "100%", padding: "1%" }}>
          <TextEditor />
         </div>
        <div style={{ width: "50%", height: "100%" }}>
          <div style={{ height: "30%", padding: "1%" }}>
            <Video />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "70%",
              width: "100%",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ width: "60%", height: "100%", padding: "1%" }}>
              <Questions />
            </div>
            <div style={{ width: "40%", padding: "1%" }}>
              <ChatRoom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
