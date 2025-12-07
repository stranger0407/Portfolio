import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--bg-primary);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
`;

export const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 4px solid var(--border-color);
  border-top-color: var(--primary-color);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 1.5rem;
`;

export const LoadingText = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 500;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;
