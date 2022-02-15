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

// bestSolution: "\"\""
// createdAt: "2022-02-09T17:24:24.724Z"
// id: "6203f8c8f9787376e44a7eeb"
// questionCategory: "496e74726f64756374696f6e"
// questionExample: "Just tell about yourself"
// questionLevel: "0"
// questionOutput: "\"This is all about your intro\" "
// questionTitle: "Tell me about yourself"
// updatedAt: