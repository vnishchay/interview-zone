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
  const { email, successfulLogin, jwt, userid } = user;
  return { email, successfulLogin, jwt, userid };
};

const Auth = () => {
  const [user, setuser] = useState([]);



  const signIn = async (email, password) => {
    try {
      console.log(email.current.value)
      console.log(password.current.value)
      await axios
        .post("http://localhost:3001/login", {
          email: email.current.value,
          password: password.current.value,
        })
        .then((response) => {
          if (response.data.statusCode === 200) {
            localStorage.setItem("jwt", response.data.token);
            localStorage.setItem("email", response.data);
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
      user.email.current.value === null ||
      user.password.current.value === null
    )
      return;
    try {
      await axios
        .post("http://localhost:3001/signup", {
          email: user.email.current.value,
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
