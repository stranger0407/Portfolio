import styled from "styled-components";
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
    
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-primary);
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: var(--text-primary);
      
      &::after {
        width: 100%;
      }
    }
  }
  
  button {
    background: var(--gradient-primary);
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
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-glow), var(--shadow-md);
      
      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 70px; 
    right: -100%;
    flex-direction: column;
    background: var(--bg-secondary);
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
      }
    }
    
    button {
      margin-top: 1rem;
      width: 100%;
      padding: 1rem;
    }
  }
`;
  