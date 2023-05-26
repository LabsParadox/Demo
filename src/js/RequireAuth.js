import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../js/AuthContext';

const RequireAuth = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    // Redirect the user to the login page if not authenticated
    return <Navigate to="/" replace />;
  }

  // Render the protected component if authenticated
  return <>{children}</>;
};

export default RequireAuth;
