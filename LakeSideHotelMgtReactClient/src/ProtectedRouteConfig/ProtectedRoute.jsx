import React from 'react';
import { Navigate } from 'react-router-dom';
import authServiceInstance from '../Services/AuthService';

const ProtectedRoute = ({ children }) => {
  const token = authServiceInstance.getToken();

  if (!token) {
    return <Navigate to="/login"  />;
  }
  
  return children;
};

export default ProtectedRoute;
