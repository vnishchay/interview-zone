import React, { Component } from "react";
import styled, { css } from "styled-components";
import TextArea from "./TextArea";

function ChatArea(props) {
  return <Container {...props}>
    <div style={{
      position : "relative", 
      display: "flex", 
      flexDirection: "row",
      padding:5, 
      wrap

    }}>
      <TextArea/>
      <TextArea/>
    </div>
  </Container>;
}

const Container = styled.div`
 background-color: #E6E6E6;
`;

export default ChatArea;
