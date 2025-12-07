import styled from "styled-components";

export const ContainerStyled = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
  background: var(--bg-primary);
  position: relative;
  overflow-x: hidden;
  
  /* Subtle background pattern */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
  
  & > * {
    position: relative;
    z-index: 1;
  }
`;
