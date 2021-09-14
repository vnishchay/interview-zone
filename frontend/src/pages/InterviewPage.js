import ChatRoom from '../components/chat';
import { Grid } from '@material-ui/core';
import Texteditor from '../components/texteditor'; 
import Video from '../components/video';
import Questions from '../components/questions';


export default function InterviewPage() {
    return (
      <div>
        <Grid container justifyContent="space-between" alignItems="stretch"> 
        <Grid item xs = {6} >
        <Texteditor/>
        </Grid>
        <Grid item xs = {6} direction="column" justifyContent="space-between" > 
        <Grid item xs = {6}> 
        <Video/>
        </Grid>
        <Grid item xs = {3}> 
        <ChatRoom/>
        </Grid>
        <Grid item xs = {3}> 
        <Questions/>
        </Grid>
        </Grid>
        </Grid>
    </div>
  )
}
