import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, } from "react-router";
import { Switch } from "react-router";
import CreateRoom from "./components/createRoom"; 
import Room from "./components/room"; 
import { black } from "color-name";
function App() {

    
    return <div className="App" >

      
      <BrowserRouter>
        <Switch>
				<Route path="/" exact component={CreateRoom}></Route>
      
				<Route path="/room/:roomID" component={Room}></Route>
       
			</Switch>
      </BrowserRouter>
         </div>
}

export default App;


