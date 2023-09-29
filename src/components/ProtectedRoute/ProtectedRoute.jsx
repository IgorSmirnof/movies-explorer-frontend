import React from "react";
import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ isLoggedIn, children }) => {
//   console.log('ProtectedRoute', isLoggedIn)
//   return isLoggedIn ? children : <Navigate to="/signin" replace />;
// };


function ProtectedRoute({element: Component, ...props }) { 
  return (
    // props.isLoggedIn ? <Component {...props} /> : <Navigate to="/signin" replace />
    localStorage.getItem('jwt') !== null ? <Component {...props} /> : <Navigate to="/signin" replace />
  )
};


export default ProtectedRoute;