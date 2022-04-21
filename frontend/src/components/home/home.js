import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { useHistory } from "react-router-dom";
import "./home.css"

export default function HomePage() {
  const [link, setlink] = useState("");
  const auth = useAuth();
  const [username, setusername] = useState();
  const history = useHistory();
  const joinmeet = useRef("");



  useEffect(() => {
    if (localStorage.getItem("jwt") == undefined || auth.user === undefined) {
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
  const interviewID = v4();

  return (
    <div className="homepage">
      <main>
        <div className="box1">
          <img className="img-hm" src="images/undraw_augmented_reality_re_f0qd.svg"></img>

          <div className="card" id="col1"
          >
            <div>
              <div justify="center">
                <div >
                  <button

                    className="raise"
                    onClick={() => navigator.clipboard.writeText(link)}


                  >
                    {link !== ""
                      ? "http://localhost:3000" + link
                      : "Create Link"}
                  </button>
                  <div className="mb-2">

                  </div>
                  <div></div>
                </div>
              </div>

              <div container spacing={2} justifyContent="center">
                <button
                  className="raise"

                  onClick={() => setlink(`/interview/${interviewID}`)}
                >
                  Generate Link
                </button>
              </div>



              <div container spacing={2} justifyContent="center">
                <button
                  className="raise"
                  onClick={route}

                >
                  Go to interview
                </button>
              </div>



              <div className="bx-jnm" >
                <input className="inp-hm" ref={joinmeet}></input>
                <button
                  className="raise btn-meet"
                  onClick={joinMeet}

                >
                  Join Meet
                </button>
              </div>
            </div>
          </div>


        </div>

        <div maxWidth="md"></div>
      </main>
    </div>

  );
}
