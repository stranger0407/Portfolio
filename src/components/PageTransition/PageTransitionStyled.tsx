import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const PageTransition = styled.div`
  animation: ${fadeIn} 0.6s ease-out;
  
  section {
    opacity: 0;
    animation: ${fadeIn} 0.8s ease-out forwards;
    
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    
    &:nth-child(4) {
      animation-delay: 0.4s;
    }
  }
`;
