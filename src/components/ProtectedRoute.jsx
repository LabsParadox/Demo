import React, { useContext } from 'react';
import { Route, useNavigate } from 'react-router-dom';
import AuthContext from '../js/AuthContext';

const ProtectedRoute = ({ children, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!auth) {
    // if user is not authenticated, redirect to home page
    navigate('/');
    return null;
  }

  return <Route {...rest}>{children}</Route>;
};

export default ProtectedRoute;
