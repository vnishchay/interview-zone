import React from 'react'
import { Redirect, Route } from 'react-router-dom'

// TODO : complete all routes authentication and figure out the best practices for it. 
export default function ProtectedRoute({isAuth : isAuth , component: component, ...rest}) {
    return (
         <Route {...rest} 
         render={(props) => {
             if (isAuth) {
                 return <Component />
             }else {
                 return <Redirect to={{pathname="/", state: {from : this.props.location }}}/>
             }
         }}             
        /> )
}

export default ProtectedRoute;