import styled from "styled-components";
export const LogoStyled = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Poppins', monospace;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 0.5px;
    
    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
    }
  }
`;