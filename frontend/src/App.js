
// import './App.css';
import CommChannels from './components/CommChannel';
import { Redirect,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Texteditor from './components/texteditor'; 
import {v4 as uuidV4} from 'uuid'; 
import Video from './components/video';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact >
          {/* here we will provide our own route address */}
          <Redirect to={`/documents/${uuidV4()}`} />
          </Route>
          <Route path="/documents/:id" >
          <div style={{display: 'flex'}}>
            <Texteditor/>
           <div style={{display: 'flex', flexDirection:'column'}}>
            <div>
            <Video/>
          
            </div>
             <CommChannels/>
           </div>
            </div>
          </Route>
        </Switch>
      </Router>
  
    </div>
  );
}

export default App;
