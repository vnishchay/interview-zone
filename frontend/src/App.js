// import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import page_not_found from "./components/pagenotfound/page_not_found";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import InterviewPage from "./components/interviewpage/InterviewPage";
import ProfilePage from "./components/profile/profilepage";
import AddQuestion from "./components/question/addQuestion";
import HomePage from "./components/home/home";
import { PrivateRoute } from "./components/auth/authContext";
import { AuthProvider } from "./components/auth/authContext";
import SearchPeerPage from "./components/searchPeer/serachPeer";
import BoopButton from "./components/notifications/sound"

// import ResponsiveAppBar from "./components/appbar/appbar";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} ></Route>
          <PrivateRoute path='/interview/:id'>
            <InterviewPage></InterviewPage>
          </PrivateRoute>
          {/* <Route path="/profile" component={ProfilePage} ></Route> */}
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/search" component={SearchPeerPage}></Route>
          <Route path="/addproblem" component={AddQuestion} ></Route>

          <Route path="/boop" component={BoopButton} ></Route>
          <Route path="*" component={page_not_found}></Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>

  );
}
export default App;
