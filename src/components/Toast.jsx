import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

const ToastContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${props => {
    switch (props.type) {
      case 'error': return '#e74c3c';
      case 'warning': return '#f39c12';
      case 'success': return '#2ecc71';
      default: return '#3498db';
    }
  }};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  animation: ${props => props.fadeOut ? fadeOut : fadeIn} 0.3s ease-in-out;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    right: 10px;
    left: 10px;
    max-width: none;
  }
`;

const ToastIcon = styled.span`
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ToastMessage = styled.span`
  flex: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'error': return '❌';
      case 'warning': return '⚠️';
      case 'success': return '✅';
      default: return 'ℹ️';
    }
  };

  return (
    <ToastContainer type={type} fadeOut={false}>
      <ToastIcon>{getIcon()}</ToastIcon>
      <ToastMessage>{message}</ToastMessage>
      <CloseButton onClick={onClose}>×</CloseButton>
    </ToastContainer>
  );
}

export default Toast;
