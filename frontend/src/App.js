
// import './App.css';

import HomePage from "./pages/home";
import InterviewPage from "./pages/InterviewPage";
import {BrowserRouter, Redirect, Route} from 'react-router-dom'
import Landing from "./pages/landing";
import page_not_found from "./components/page_not_found";

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
        
        <Route exact path='/interview/:id' component={InterviewPage} />
      
        <Route exact path='/landing' component={Landing} />
      </BrowserRouter>
  );
}

export default App;
