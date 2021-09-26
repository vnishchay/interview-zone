import React from 'react'
import "../styles/register.css"; 
import { useRef } from 'react';

import { Redirect } from 'react-router';
const axios = require("axios"); 
export default function Login() {
   const username = useRef(); 
   const password = useRef(); 
   const url = "http://localhost:3001/login" ;
   

   const checklogin = async ()=>{
       console.log("this function is called" + username.current.value+ password.current.value)
       const response = await axios.post(url, {
           username : username.current.value, 
           password : password.current.value, 
       }).then((r)=>{
         console.log(r); 
       })
         if(response.body.successfulLogin == true ) {
          <Redirect to="/home" />
         }
    }   
    return (

  <div className="login-container" style={{  marginBottom: "2%" }}>
  <form action="" className="form-login">
    <ul className="login-nav">
      <li className="login-nav__item active">
        <a href="#">Sign In</a>
      </li>
    </ul>
    <label className="login__label">
      Username
    </label>
    <input id="login-input-user" className="login__input" type="text" ref= {username} />
    <label  className="login__label">
      Password
    </label>
    <input id="login-input-password" className="login__input" type="password"  ref={password}/>
    <label className="login__label--checkbox">
      <input id="login-sign-up" type="checkbox" className="login__input--checkbox" />
      Keep me Signed in
    </label>
    <button className="login__submit" onClick={()=>checklogin()}> Sign in</button>
  </form>
</div>
    )
}

