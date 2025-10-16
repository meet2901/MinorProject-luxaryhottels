import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';





function ProtectedRoute({ children, requireAuth = true, adminOnly = false }) {
  const { user } = useAuth();
  const location = useLocation();

  if (requireAuth && !user) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (adminOnly && (!user || user.email !== 'meet85734@gmail.com')) {
    // Redirect to home if not admin
    return <Navigate to="/" replace />;
  }

  if (!requireAuth && user) {
    // If user is logged in and trying to access auth pages, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
