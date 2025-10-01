import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #ED6D05;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  const getSize = () => {
    switch (size) {
      case 'small': return { width: '20px', height: '20px' };
      case 'large': return { width: '60px', height: '60px' };
      default: return { width: '40px', height: '40px' };
    }
  };

  return (
    <SpinnerContainer>
      <Spinner style={getSize()} />
      {text && <p style={{ marginLeft: '1rem', color: '#666' }}>{text}</p>}
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
