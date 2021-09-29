
// import './App.css';

import HomePage from "./pages/home";
import InterviewPage from "./pages/InterviewPage";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import page_not_found from "./components/page_not_found";
import Login from "./pages/login";
import Register from "./pages/register";
import addQuestion from "./pages/addQuestion";
function App() {

  return (
      <BrowserRouter>
      <Switch>
      <Route exact path='/' render={()=>{
        if(localStorage.getItem("jwt")){
          return <Redirect to="/home" />
        }
        return (
          <Redirect to="/signin" />
        )
      }} />
         <Route  path='/notfound' component={page_not_found}></Route>
        <Route  path='/home' component={HomePage} />
        <Route  path='/signup' component={Register} /> 
        <Route  path='/signin' component={Login}/>
        <Route  path="/addproblem" component={addQuestion}/>
        <Route  path='/interview/:id' component={InterviewPage} />
        </Switch>
      </BrowserRouter>
  );

}
export default App;
