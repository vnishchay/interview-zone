import React, { useState } from "react";
import TextEditor from "../texteditor/textEditor";
import Questions from "../question/questions";
import axios from "axios";
import ChatRoom from "../chat/chat";
import "./interview.css"
import { useEffect } from "react"
import { useAuth } from "../auth/authContext";
import useSound from "use-sound"
import Video from "../videocall/video"
import PrimarySearchAppBar from "./appbar";
/**
 * @props  user1 
 * @returns Interview Page 
 */
/**
 * todo : sound effect
 * @param {} param0 
 * @returns 
 */
export default function InterviewPage() {
  const [time, settime] = useState();
  const [interview, setinterview] = useState();
  const [play] = useSound('notify.mp3');

  const auth = useAuth();
  const data =
  {
    "typeOfInterview": "Job",
    "numberOfQuestions": 8, //
    "levelOfQuestions": "medium", //
    "idOfHost": auth.user.userid
  }

  const saveInterviewData = async () => {
    try {
      console.log(auth.user.jwt)
      axios.post("http://localhost:3001/interview/create",
        data,
        {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${auth.user.jwt}`
          },
        }
        // data
      ).then((res) => {
        console.log(res);
        setinterview(res.data.data);
      })
    } catch (err) {
      console.log("error on interview page" + err)
    }
  }

  useEffect(() => {
    saveInterviewData();
    setTimeout(play, 1000)
    settime(time);
  }, [])

  return (
    <div className="container">
      <div className="TextArea ">
        <TextEditor />
      </div>
      {/* <div className="Tools "></div> */}
      <div className="buttons">
        <PrimarySearchAppBar />
      </div>
      {/* if video call will be on this will show up otherwise not */}
      <div className="Video-Call "> </div>
      <div className="Questions"><Questions /></div>
      <div className="VideoCall "><Video /></div>
      <div className="Questionsfull"></div>
      <div className="messages">
        <div className="Final-Messages ">
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}



