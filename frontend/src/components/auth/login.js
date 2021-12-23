import React  from "react";
import "./register.css";
import { useRef } from "react";
import { useAuth } from "./authContext";
import { useHistory } from "react-router-dom";


export default function Login() {
  
  const username = useRef();
  const password = useRef();
  const auth = useAuth() ; 
  const history = useHistory(); 
  const submitlogin = async (e) => {
    e.preventDefault(); 
    auth.signIn(username, password); 
    history.push('/');
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
        <button className="login__submit" onClick={submitlogin}>
          Sign in
        </button>
      </form>
     </div>
  );
}