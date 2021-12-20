

// const { createContext, useState, useContext } = require("react")


// const AuthContext = createContext() ; 

// export const AppContextProvider = (props)=>{
//     const auth = Auth() ; 
//     return (
//         <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
//     )
// }

// export const useAuth = ()=> useContext(AuthContext); 

// export const getUser = ( user ) =>{
//     const {email, username, photoURL } = user ; 
//     return { email, name: username, photo: photoURL } ; 
// }


// //***************** Redirect review item to signIn ************************
// export const PrivateRoute = ({ children, ...rest }) => {
//   const auth = useAuth();
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         auth.user ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/signup",
//               state: { from: location },
//             }}
//           />
//         )
//       }
//     />
//   );
// };


import React, { useState, useEffect, createContext, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

const url = "http://localhost:3001/login";

// const Auth = ()=>{


// }

// export default Auth 

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
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const getUser = (user) => {
  const { email, displayName, photoURL } = user;
  return { email, name: displayName, photo: photoURL };
};

const Auth = () => {
      const [user, setuser] = useState() ; 
    
    const signIn = (username, password) => {
       try {
               axios
                .post(url, {
                  username: username.current.value,
                  password: password.current.value,
                })
                .then((response) => {
                  console.log(response.data.jwt);
                  if (response.data.successfulLogin) {
                    localStorage.setItem("jwt", response.data.jwt);
                    setuser({username})
                  }
                  // window.history.back()
                });
            } catch (e) {
              alert(e.message);
        }
    }



  const signUp =  (user) => {
   if (
      user.username.current.value === null ||
      user.password.current.value === null ||
      user.email.current.value === null ||
      user.fname.current.value === null
    ) return;

    try {
      axios
      .post(url, {
        username: user.username.current.value,
        password: user.password.current.value,
        email: user.email.current.value,
        country: user.country.current.value,
        normalName: user.fname.current.value,
      },).then(()=>{
        window.history.back()
      })
    }
    catch(e) {
      console.log("this is getting called ");
      console.log(e);
    };
  }

  return {
    user, 
    signIn, 
    signUp
  }
};


export default Auth;
