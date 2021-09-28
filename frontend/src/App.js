
// import './App.css';

import HomePage from "./pages/home";
import InterviewPage from "./pages/InterviewPage";
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import Landing from "./pages/landing";
import page_not_found from "./components/page_not_found";
import Login from "./pages/login";
import Register from "./pages/register";
import addQuestion from "./pages/addQuestion";
function App() {
  return (
      <BrowserRouter>
      <Route exact path='/' render={()=>{
        return (
          <Redirect to="/home" />
        )
      }} />
         <Route exact path='/notfound' component={page_not_found}></Route>
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/signup' component={Register} /> 
        <Route exact path='/signin' component={Login}/>
        <Route exact path="/addproblem" component={addQuestion}/>
        <Route exact path='/interview/:id' component={InterviewPage} />
      
        <Route exact path='/landing' component={Landing} />
      </BrowserRouter>
  );
}
export default App;
