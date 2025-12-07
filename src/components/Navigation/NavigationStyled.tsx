import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
  }
`;

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
    
  a {
    text-decoration: none;
    color: var(--text-secondary);
    font-weight: 500;
    font-size: 1rem;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 0.5rem 0;
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      transform: translateX(-50%);
    }
    
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 4px;
      height: 4px;
      background: var(--primary-color);
      border-radius: 50%;
      transform: translateX(-50%) scale(0);
      transition: transform 0.3s ease;
      opacity: 0;
    }
    
    &:hover {
      color: var(--text-primary);
      transform: translateY(-2px);
      
      &::after {
        width: 100%;
      }
    }
    
    &.active {
      color: var(--primary-color);
      
      &::after {
        width: 100%;
      }
      
      &::before {
        transform: translateX(-50%) scale(1);
        opacity: 1;
        bottom: -8px;
        animation: ${pulseGlow} 2s ease-in-out infinite;
      }
    }
  }
  
  button {
    background: var(--gradient-primary);
    background-size: 200% auto;
    color: white;
    border: none;
    padding: 0.7rem 1.8rem;
    border-radius: 25px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    box-shadow: var(--shadow-sm);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: translateY(-3px) scale(1.05);
      box-shadow: var(--shadow-glow), var(--shadow-md);
      animation: ${shimmer} 2s linear infinite;
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px) scale(1.02);
    }
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px; 
    right: -100%;
    flex-direction: column;
    background: var(--bg-secondary);
    backdrop-filter: blur(20px);
    width: 75%;
    height: calc(100vh - 70px);
    padding: 2rem;
    box-shadow: -10px 0px 30px rgba(0, 0, 0, 0.5);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 999;
    border-left: 1px solid var(--border-color);
     
    &.open {
      right: 0;
    }

    a {
      width: 100%;
      padding: 1.2rem 0;
      border-bottom: 1px solid var(--border-color);
      font-size: 1.1rem;
      
      &:last-of-type {
        border-bottom: none;
      }
      
      &::after {
        bottom: 0;
        left: 0;
        transform: translateX(0);
      }
      
      &:hover {
        transform: translateX(10px);
      }
    }
    
    button {
      margin-top: 1rem;
      width: 100%;
      padding: 1rem;
    }
  }
`;