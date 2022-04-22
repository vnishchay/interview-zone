import React from "react";
import "./questions.css";
import { useEffect, useState, useRef } from "react";
import QuestionWidget from "./questionwidget";
const axios = require("axios");



export default function Questions({ questions }) {

  return (
    <div className="questions-box">
      <div className="scroller-outer ">
        <div className="scroller-inner" >
          {
            questions && questions.map((question) => {
              return <QuestionWidget key={question["id"]} question={question}></QuestionWidget>
            })
          }
        </div>
      </div>
    </div>
  );
}

