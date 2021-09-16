
// import './App.css';

import HomePage from "./pages/home";
import InterviewPage from "./pages/InterviewPage";
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from "./pages/landing";

function App() {
  return (

      <BrowserRouter>
      {/* <Route exact path='/' /> */}

        <Route exact path='/home' component={HomePage} />
        
        <Route exact path='/interview/:id' component={InterviewPage} />
      
        <Route exact path='/landing' component={Landing} />
      </BrowserRouter>
  );
}

export default App;
