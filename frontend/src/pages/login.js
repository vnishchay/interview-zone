import React, { useContext } from "react";
import "../styles/register.css";
import { useRef } from "react";

import { AppContextUpdate } from "../components/context";
import { useHistory } from "react-router";
const axios = require("axios");
export default function Login() {
  const username = useRef();
  const password = useRef();
  const url = "http://localhost:3001/login";
  const history = useHistory();
  const updateAppContext = useContext(AppContextUpdate); 
  const submitlogin = async () => {
    console.log(
      "this function is called" +
        username.current.value +
        password.current.value
    );
    try {
      await axios
        .post(url, {
          username: username.current.value,
          password: password.current.value,
        })
        .then((response) => {
          console.log(response.data.jwt);
          if (response.data.successfulLogin) {
            localStorage.setItem("jwt", response.data.jwt);
            const obj =       username.current.value;
            localStorage.setItem("appContextdata", obj)   
            updateAppContext(obj); 
            history.push("/home");
          }
        });
    } catch (e) {
      alert(e.message);
    }
  };
  return (
    <div className="login-container" style={{ marginBottom: "2%" }}>
      <form action="" className="form-login">
        <ul className="login-nav">
          <li className="login-nav__item active">
            <div>Sign In</div>
          </li>
        </ul>
        <label className="login__label">Username</label>
        <input
          id="login-input-user"
          className="login__input"
          type="text"
          ref={username}
        />
        <label className="login__label" id="current-password">Password</label>
        <input
          id="current-password"
          className="login__input"
          type="password"
          
          ref={password}
        />
        <label className="login__label--checkbox">
          <input
            id="login-sign-up"
            type="checkbox"
            className="login__input--checkbox"
          />
          Keep me Signed in
        </label>
        <button className="login__submit" onClick={() => submitlogin()}>
          Sign in
        </button>
      </form>
     </div>
  );
}