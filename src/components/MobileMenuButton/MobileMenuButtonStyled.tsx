import styled from "styled-components";
export const MobileMenuButtonStyled = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2.5rem;
  height: 2.5rem;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  span {
    width: 100%;
    height: 3px;
    background: var(--text-primary);
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &.open:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
      background: var(--primary-color);
    }
    
    &.open:nth-child(2) {
      opacity: 0;
      transform: translateX(20px);
    }
    
    &.open:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
      background: var(--primary-color);
    }
  }
  
  &:hover {
    border-color: var(--primary-color);
    background: var(--bg-tertiary);
    transform: scale(1.05);
    
    span {
      background: var(--primary-light);
    }
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;