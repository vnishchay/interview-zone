import React, { useState, createContext, useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

const axios = require('axios')
const AuthContext = createContext();


export const AuthProvider = (props) => {


  const auth = Auth();

  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

//***************** Redirect review item to signIn ************************
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("jwt") && auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const getUser = (user) => {
  const { username, successfulLogin, jwt, userid } = user;
  return { username, successfulLogin, jwt, userid };
};

const Auth = () => {
  const [user, setuser] = useState([]);



  const signIn = async (username, password) => {
    try {
      await axios
        .post("http://localhost:3001/login", {
          username: username.current.value,
          password: password.current.value,
        })
        .then((response) => {
          if (response.data.successfulLogin) {
            localStorage.setItem("jwt", response.data.jwt);
            localStorage.setItem("username", response.data.username);
            console.log(response)
            setuser(response.data)
          }
          console.log(response)
        });
    } catch (e) {
      console.log(e)
      alert("Login Request Failed : 400");
      // }
    }
  }

  const signUp = async (user) => {
    if (
      user.username.current.value === null ||
      user.password.current.value === null
    )
      return;
    try {
      await axios
        .post("http://localhost:3001/signup", {
          username: user.username.current.value,
          password: user.password.current.value,
        }).then((response) => {
          console.log(response)
          setuser(response.data)
        })
    }
    catch (e) {
      console.log("this is getting called ");
      console.log(e);
      return false;
    };
  }

  const logout = () => {
    setuser(undefined)
    localStorage.removeItem("jwt")
  }

  return {
    user,
    signIn,
    signUp,
    logout
  }
};


export default Auth;
