import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateRoom from "./components/createRoom";
import Room from "./components/room";
function App() {
    return <div className="App">
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={CreateRoom}></Route>
				<Route path="/room/:roomID" component={Room}></Route>
			</Switch>
		</BrowserRouter>
	</div>;
}

export default App;