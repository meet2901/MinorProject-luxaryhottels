import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: ${props => props.$isVisible ? fadeIn : fadeOut} 0.5s ease-in-out;
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;

const LoadingContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  color: white;
`;

const HotelIcon = styled.div`
  font-size: 4rem;
  animation: ${float} 2s ease-in-out infinite;
  margin-bottom: 1rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`;

const LoadingText = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const LoadingSubtext = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const LoadingDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  background: white;
  border-radius: 50%;
  animation: ${pulse} 1.5s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  margin: 2rem auto 0;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
  border-radius: 2px;
  animation: ${props => props.$animate ? 'progress 2s ease-out forwards' : undefined};

  @keyframes progress {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

/**
 * AppLoading Component
 * 
 * A full-screen loading animation that displays for 2 seconds with:
 * - Blurred background effect
 * - Floating hotel icon animation
 * - Progress bar animation
 * - Smooth fade out transition
 * 
 * @param {Function} onComplete - Callback function called when loading is complete
 */
function AppLoading({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    // Start progress animation immediately
    setAnimateProgress(true);

    // Hide loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call onComplete after fade out animation completes
      setTimeout(() => {
        onComplete();
      }, 500); // Match fadeOut animation duration
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <LoadingOverlay $isVisible={isVisible}>
      <BlurBackground />
      <LoadingContent>
        <HotelIcon>🏨</HotelIcon>
        <LoadingText>Welcome to Our Hotel</LoadingText>
        <LoadingSubtext>Preparing your experience...</LoadingSubtext>

        <LoadingDots>
          <Dot $delay={0} />
          <Dot $delay={0.2} />
          <Dot $delay={0.4} />
        </LoadingDots>

        <ProgressBar>
          <ProgressFill $animate={animateProgress} />
        </ProgressBar>
      </LoadingContent>
    </LoadingOverlay>
  );
}

export default AppLoading;
