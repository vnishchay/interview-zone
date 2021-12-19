// import './App.css';
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import page_not_found from "./components/pagenotfound/page_not_found";
import HomePage from "./components/home/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import InterviewPage from "./components/interviewpage/InterviewPage";
import addQuestion from "./components/question/addQuestion";
import Timer from "./components/timer/timer";

function App() {
   return (
      // <AppContextProvider>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (localStorage.getItem("jwt")) {
                //TODO : what to do if jwt is expired 
                return <Redirect to="/home" />;
              }
              return <Redirect to="/signin" />;
            }}
          />
        //TODO : authenitcate other routes 
          <Route path="/notfound" component={page_not_found}></Route>
          <Route path="/home" component={HomePage} />
          <Route path="/signup" component={Register} />
          <Route path="/signin" component={Login} />
          <Route path="/addproblem" component={addQuestion} />
          <Route path="/interview/:id" component={InterviewPage} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </BrowserRouter>
      // </AppContextProvider>
    
      );
}
export default App;
