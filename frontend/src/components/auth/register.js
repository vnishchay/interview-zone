import React from "react";
import "./signup.css";
import { useRef } from "react";
import { useAuth } from "./authContext";

export default function Register() {

  const username = useRef();
  const password = useRef();
  const fname = useRef();
  const country = useRef();
  const email = useRef();

  const auth = useAuth()
  onsubmit = (e) =>{
      e.preventDefault()
      const user = {username, password, country, email} ; 
      auth.signUp(user); 
      window.history.back()
  }

  return (
    <div>
      <div className="signup-container">
        <div className="sidenav">
          <div className="content">
            <h1>Welcome!</h1>
            <br />
            <p className="line"></p> <br />
       
            <br />
          </div>
        </div>

        <div className="signupform">
          <h1>Sign Up</h1>
          <div>
            <form method="post">
              <input
                type="text"
                placeholder="Name"
                id="fname"
                ref={fname}
                name="fname"
              />
              <br />
              <input
                type="text"
                placeholder="Email"
                id="email"
                ref={email}
                name="email"
              />
              <br />

              <input
                type="text"
                placeholder="Country"
                id="country"
                ref={country}
                name="country"
              />
              <br />
              <hr />
              <input
                type="text"
                placeholder="Username"
                id="uname"
                ref={username}
                name="uname"
              />
              <br />
              <input
                type="password"
                placeholder="Password"
                id="pwd"
                name="pwd"
                ref={password}
                minLength="5"
              />
              <br />
              <button id="signup" onClick={onsubmit} >
                <span className="signup">Sign up</span>
              </button>
              <div id="btnmodal" className="modal">
                <div className="modal-content">
                  <span className="close">&times;</span>
                  <p>Thanks for signing up!</p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
