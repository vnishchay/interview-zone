import React, { useState } from "react";
import Screen from "./components/Screen";
import ChatArea from "./components/ChatArea";
import Whiteboard from "./components/Whiteboard"; 
import Video1 from "./components/Video1";
import Video2 from "./components/Video2";
import TextArea from "./components/TextArea";
import styled, { css } from 'styled-components';


function App() {
    
    return <div className="App" >
<div  style={{
  padding: 5,
  display:"flex", 
  flexDirection: "row"
}}>
    
      <Whiteboard
        style={{

          position: "relative",
       
          height: screen.height, 
          width : screen.width/2,
        }}
      ></Whiteboard>
      <ChatArea
        style={{
          position: "relative",
       
          height: screen.height, 
          width: screen.width/2,
        }}
      ></ChatArea>

   </div> 
		{/* <BrowserRouter>
			<Switch>
				<Route path="/" exact component={CreateRoom}></Route>
				<Route path="/room/:roomID" component={Room}></Route>
			</Switch>
		</BrowserRouter> */}
    </div>

}

export default App;


const Stack = styled.div`
  width: 1367px;
  height: 768px;
  position: relative;
  display: flex;
`;

const Rect = styled.div`
  top: 85px;
  left: 892px;
  width: 100px;
  background: black;
  height: 100px;
  position: absolute;
`;


