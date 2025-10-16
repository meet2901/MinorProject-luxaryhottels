import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  flex-direction: column;
`;

const FloatingIcon = styled.div`
  font-size: 3rem;
  animation: ${float} 3s ease-in-out infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled.p`
  color: #666;
  font-size: 1.1rem;
  text-align: center;
`;

function Loading({ message = "Loading..." }) {
  return (
    <LoadingContainer>
      <FloatingIcon>🏨</FloatingIcon>
      <LoadingText>{message}</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
