import styled from "styled-components";
export const MobileMenuButtonStyled = styled.button`
  display: none;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  border-radius: 8px;
  padding: 0.5rem 0.8rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-primary);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: var(--primary-light);
    border-color: var(--primary-color);
    background: var(--bg-tertiary);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;