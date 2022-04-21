import React, { useRef } from "react";
import { useAuth } from "./authContext";


export default function Register() {
  const email = useRef();
  const password = useRef();
  const auth = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    auth.signUp({ email, password });
    window.history.back()
  }
  return (
    <>

      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign up</h2>
          <input type="email" ref={email} placeholder="email" />
          <input type="password" ref={password} placeholder="password" />
          <button className="raise" onClick={handleSubmit}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
