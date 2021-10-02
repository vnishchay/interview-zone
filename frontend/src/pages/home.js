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
export default function HomePage() {
  const history = useHistory();
  const data = useContext(AppContext);
  const [usedata, setusedata] = useState(data);
  const [link, setlink] = useState(""); 
  useEffect(() => {
    const data = localStorage.getItem("appContextdata");
    setusedata(data);
  }, [usedata]);
  function logout(){ 
      localStorage.removeItem("jwt"); 
      localStorage.removeItem("appContextdata"); 
       if(!localStorage.getItem("jwt")){
        history.push("/signin");
      }   
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <IconButton size="small" edge="start" color="grey" sx={{ mr: 2 }}  onClick={logout}>
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
                    onClick={()=> setlink(`/interview/${v4()}`)}
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                    {link!=="" ? "http://localhost:3000"+ link : "Create Link"} 
                  </Button>
             
              </Grid>
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
    </React.Fragment>
  );
}
