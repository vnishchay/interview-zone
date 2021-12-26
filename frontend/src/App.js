// import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import page_not_found from "./components/pagenotfound/page_not_found";
import HomePage from "./components/home/home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import InterviewPage from "./components/interviewpage/InterviewPage";
import { AuthProvider, PrivateRoute } from "./components/auth/authContext"
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Backspace, Home } from "@mui/icons-material";
import { useHistory } from "react-router";
// import ResponsiveAppBar from "./components/appbar/appbar";
function App() {
   const history = useHistory(); 
   return (
      <AuthProvider>
      <BrowserRouter>
       <AppBar>
         <Toolbar>
         <Button
              variant="contained"
              onClick={() => window.history.back()        }
              color="primary"
              startIcon={<Backspace />}
            >
              back
            </Button>
         </Toolbar>
       </AppBar>
        <Switch>
        <Route exact path="/" component={HomePage} />
          <PrivateRoute path='/interview/:id'>
            <InterviewPage></InterviewPage>
          </PrivateRoute>
           <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="*" component={page_not_found}></Route>
         
         </Switch>
      </BrowserRouter>
     </AuthProvider>
    
      );
}
export default App;
