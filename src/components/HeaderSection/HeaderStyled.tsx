import styled from "styled-components";

export const HeaderStyled = styled.section`
  display: flex;
  padding: 1rem 5%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(59, 130, 246, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &.scrolled {
    padding: 0.8rem 5%;
    background: rgba(15, 23, 42, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;



