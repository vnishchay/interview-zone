import React, {useState } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
// import { AppBar, Toolbar, IconButton } from "@material-ui/core";

export default function HomePage() {
  const [link, setlink] = useState("")
  const auth = useAuth() ; 
  console.log(auth.user)
  return (
    <div>
      {/* <AppBar>
        <Toolbar>
          <h3>{username}</h3>
          <IconButton
            size="small"
            edge="start"
            color="grey"
            sx={{ mr: 2 }}
            onClick={log}
          >
            {usedata ? "logout" : "login"}
          </IconButton>
        </Toolbar>
      </AppBar> */}
      <main>
        <div>
          <Container
            maxWidth="xl"
            style={{ margin: "auto", padding: "15%", justifyContent: "center" }}
          >
            <div>
              <Grid container spacing={2} justifyContent="center" >
                <Button
                  onClick={() =>   navigator.clipboard.writeText( 'http://localhost:3000'+link)}
                  variant="contained"
                  color="primary"
                  style={{ padding: "3%" }}
                >
                  {link !== "" ? "http://localhost:3000" + link : "Create Link"}
                </Button>
                <Button onClick={()=>  setlink(`/interview/${v4()}`)}>Generate Link</Button>

              </Grid>

            
              <Grid container spacing={2} justifyContent="center">
                {/* <Link to={link}> */}
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                    {/* Go to interview + {usedata ? usedata : data} */}
                  </Button>
                {/* </Link> */}
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md"></Container>
      </main>
    </div>
  );
}
