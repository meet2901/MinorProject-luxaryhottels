import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Button from './Button';

const ProtectedContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--space-xl) var(--space-md);
`;

const ProtectedCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  padding: var(--space-4xl);
  width: 100%;
  max-width: 500px;
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--space-3xl) var(--space-xl);
    border-radius: 16px;
  }
`;

const ProtectedIcon = styled.div`
  width: 80px;
  height: 80px;
  background: #ED6D05;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--space-xl);
  color: white;
  font-size: 2rem;
`;

const ProtectedTitle = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: var(--space-md);
  font-weight: 600;
`;

const ProtectedMessage = styled.p`
  color: #666;
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: var(--space-2xl);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--space-md);
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

function ProtectedRoute({ children, requireAuth = true }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <ProtectedContainer>
        <ProtectedCard>
          <ProtectedIcon>
            <svg fill="currentColor" viewBox="0 0 20 20" style={{ width: '40px', height: '40px' }}>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </ProtectedIcon>
          <ProtectedTitle>Loading...</ProtectedTitle>
          <ProtectedMessage>Please wait while we verify your authentication status.</ProtectedMessage>
        </ProtectedCard>
      </ProtectedContainer>
    );
  }

  if (requireAuth && !user) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!requireAuth && user) {
    // If user is logged in and trying to access auth pages, redirect to dashboard
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;
