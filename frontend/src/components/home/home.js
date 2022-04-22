import React, { useState, useEffect, useRef } from "react";
import { v4 } from "uuid";
import { useAuth } from "../auth/authContext";
import { useHistory } from "react-router-dom";
import "./home.css"
import { Link } from "react-router-dom";

export default function HomePage() {
  const [link, setlink] = useState("");
  const auth = useAuth();
  const [email, setemail] = useState();
  const history = useHistory();
  const joinmeet = useRef("");

  useEffect(() => {
    if (localStorage.getItem("jwt") == undefined || auth.user === undefined) {
      setemail("guest");
    } else {
      setemail(auth.user.email);
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
  const handleLogout = () => {
    auth.logout();
    history.push('/')
  }
  return (
    <div className="homepage">

      <main>
        <div className="box1">
          <img className="img-hm" src="images/undraw_positive_attitude_re_wu7d.svg"></img>

          <div className="card" id="col1"
          >
            <div className="logout-button">
              {
                localStorage.getItem("jwt") ? <button className="pulse" onClick={handleLogout}> logout </button> :
                  <Link to="/login"><button className="pulse"> Sign In</button></Link>
              }
              {
                localStorage.getItem("jwt") && <button className="pulse" >Account</button>
              }
            </div>
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

                  onClick={() => setlink(`/setup/${interviewID}`)}
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

              <Link to={'/setupInterview'}> <button className="offset"> Setup Interview </button>  </Link>

            </div>

          </div>

        </div>

        <div maxWidth="md"></div>
      </main>
    </div>

  );
}
