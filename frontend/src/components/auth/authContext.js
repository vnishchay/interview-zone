import React, { useState, createContext, useContext } from "react";
import { Route, Redirect} from "react-router-dom";

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
       
        auth.user !== undefined && auth.user.successfulLogin ? (
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
  const { username, successfulLogin, jwt } = user;
  return { username, successfulLogin, jwt };
};

const Auth = () => {
    const [user, setuser] = useState(); 
    
    const signIn = async (username, password) => {
      console.log("sign iN function")
       try {
            await axios
                .post( "http://localhost:3001/login", {
                  username: username.current.value,
                  password: password.current.value,
                })
                .then((response) => {
                  if (response.data.successfulLogin) {
                    localStorage.setItem("jwt", response.data.jwt);
                    localStorage.setItem("username", response.data.username); 
                    setuser(response.data)
                  }
                });
            } catch (e) {
              console.log("getting some error?? ")
              alert(e.message);
        }
    }

  const signUp =  async (user) => {
    console.log(user)
   if (
      user.username.current.value === null ||
      user.password.current.value === null ||
      user.email.current.value === null ||
      user.country.current.value === null
    ) 
    return;
    console.log("still here")
    try {
      await axios
      .post( "http://localhost:3001/signup", {
        username: user.username.current.value,
        password: user.password.current.value,
        email: user.email.current.value,
        country: user.country.current.value,
      },).then((response)=>{
        setuser(response.data)
        return response.data
      })
    }
    catch(e) {
      console.log("this is getting called ");
      console.log(e);
    };
  }

  const logout = ()=>{
      // remove the local jwt token thats it
  }

  return {
    user, 
    signIn, 
    signUp, 
    logout
  }
};


export default Auth;
