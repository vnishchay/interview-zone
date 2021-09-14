import ChatRoom from '../components/chat';
import { Grid } from '@material-ui/core';
import Texteditor from '../components/texteditor'; 
import Video from '../components/video';
import Questions from '../components/questions';


export default function InterviewPage() {
    return (
      <div>
      <div>
       <div className="container">
  <div className="row main" style={{height:"100vh"}}>
  <div className="col-6">
     <Texteditor/>
  </div>
  <div className="col-6">
    <div className="container-fluid d-flex flex-column" style={{height :"100%" }}>
      <div className="card flex-grow-1">
        <div className="card-body">
          <Video/>
        </div>
      </div>
      <div className="card flex-grow-1">
        <div className="card-body">
          <ChatRoom/>
        </div>
      </div>
    </div> 
   </div>
  </div>
</div>
</div>
    </div>
  )
}

<ChatRoom/>