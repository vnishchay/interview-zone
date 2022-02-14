import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Login } from "@mui/icons-material";
import { Padding } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import BoopButton from "../notifications/sound";
import HomeAppBar from "./appbar"

export default function HomePage() {
  const [link, setlink] = useState("");
  const auth = useAuth();
  const [username, setusername] = useState();
  const history = useHistory();
  const joinmeet = useRef("");



  useEffect(() => {
    if (auth.user === null || auth.user === undefined) {
      setusername("guest");
    } else {
      setusername(auth.user.username);
    }
  }, [auth]);

  const route = (e) => {
    e.preventDefault();
    history.push(link);
  };
  const joinMeet = (e) => {
    e.preventDefault();
    history.push(joinmeet.current.value);
  };


  return (
    <div className="homepage">

      <HomeAppBar variant="inherit" username={username} />
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
                    onClick={() => navigator.clipboard.writeText(link)}
                    variant="contained"
                    color="primary"
                    style={{ padding: "3%" }}
                  >
                    {link !== ""
                      ? "http://localhost:3000" + link
                      : "Create Link"}
                  </Button>
                </Grid>
              </Grid>
              <Padding> </Padding>
              <Grid container spacing={2} justifyContent="center">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => setlink(`/interview/${v4()}`)}
                >
                  Generate Link
                </Button>
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
