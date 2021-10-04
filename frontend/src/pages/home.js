import React, { useContext, useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link, Redirect, useHistory } from "react-router-dom";
import { v4 } from "uuid";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { AppContext, AppContextUpdate, AppLogout } from "../components/context";
import axios from "axios";
export default function HomePage() {
  const history = useHistory();
  const data = useContext(AppContext);
  const [usedata, setusedata] = useState(
    localStorage.getItem("appContextdata")
  );
  // verify token and if not verified return to the signin page 
  // else go to home page
  useEffect(()=>{
    console.log("is auth status getting  called? ")
    const url = "http://localhost:3001/authstatus"; 
    
    async function checkauth(){
      console.log("check login function here")
      const x =  await axios.post(url,{}, {
       headers:{
       'Authorization': localStorage.getItem("jwt")
     }})
      
    if(x.data.authorized){
         console.log(" I am authorized for this route mf")
         history.push("/home"); 
       }else {
         history.push("/signin")
       }
  
    }  
     checkauth();  
   }, [])

  const [link, setlink] = useState("");
  function logout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("appContextdata");
     history.push("/signin") 
  }


  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="grey"
            sx={{ mr: 2 }}
            onClick={logout}
          >
            {usedata ? "logout" : "login"}
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container
            maxWidth="xl"
            style={{ margin: "auto", padding: "15%", justifyContent: "center" }}
          >
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Button
                  onClick={() =>   navigator.clipboard.writeText( 'http://localhost:3000'+link)}
                  variant="contained"
                  color="primary"
                  style={{ padding: "3%" }}
                >
                  {link !== "" ? "http://localhost:3000" + link : "Create Link"}
                </Button>
              </Grid>

              <Button onClick={()=>  setlink(`/interview/${v4()}`)}>Generate Link</Button>

              <Grid container spacing={2} justifyContent="center">
                <Link to={link}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                    Go to interview + {usedata ? usedata : data}
                  </Button>
                </Link>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md"></Container>
      </main>
    </div>
  );
}
