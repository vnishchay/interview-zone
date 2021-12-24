import React, {useState , useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { AppBar, IconButton, Toolbar} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Padding } from "@mui/icons-material";

export default function HomePage() {
  const [link, setlink] = useState("")
  const auth = useAuth() ; 
  const [username, setusername] = useState(); 
  const history  = useHistory() ; 
  const joinmeet = useRef(""); 
  const classes = "dsfds"
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    if (auth.user === null || auth.user === undefined){
         setusername("guest"); 
    }else {
      setusername(auth.user.username);
    }
  }, [auth])

  const route = (e)=>{
    e.preventDefault(); 
    history.push(link); 
  }
 const joinMeet = (e)=>{
   e.preventDefault(); 
   history.push(joinmeet.current.value); 
 }

  return (
    <div>


      <AppBar>


        <Toolbar>
         <h3>{username}</h3>
         {username === "guest"} ? <IconButton onClick={() => history.push("/login")}>SignIn</IconButton> : <div></div>
        </Toolbar>
      </AppBar>


  
      <main>
        <div>
          <Container
            maxWidth="xl"
            style={{ margin: "auto", padding: "15%", justifyContent: "center" }}
          >
            <div>
            <Grid container spacing={40} justify="center">
                <Grid item spacing={20}>
                <Button
                  onClick={() =>   navigator.clipboard.writeText(link)}
                  variant="contained"
                  color="primary"
                  style={{ padding: "3%" }}
                >
                  {link !== "" ? "http://localhost:3000" + link : "Create Link"}
                </Button>
                </Grid>
         
              </Grid>
              <Padding> </Padding>
              <Grid container spacing={2} justifyContent="center" >
             
                <Button variant="outlined"  color="primary" onClick={()=>  setlink(`/interview/${v4()}`)}>Generate Link</Button>

              </Grid>
             
              <Padding> </Padding>

              <Grid container spacing={2} justifyContent="center">
          
                  <Button
                    onClick={route}
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                    Go to interview 
                  </Button>
        
              </Grid>

              <Padding> </Padding>
               
              <Grid container spacing={5} justifyContent="center">
                <input ref={joinmeet}></input>
                  <Button
                    onClick={joinMeet}
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                   Join Meet 
                  </Button>
              </Grid>


            </div>
          </Container>
        </div>
        <Container maxWidth="md"></Container>
      </main>

    </div>
    
  );
}
