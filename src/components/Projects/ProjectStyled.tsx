import styled from "styled-components";

export const ProjectStyled = styled.section`
  padding: 8rem 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  position: relative;
   
  h2 {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.3;
    margin-bottom: 3rem;
    text-align: center;
    letter-spacing: 0.02em;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: var(--gradient-secondary);
      border-radius: 2px;
    }
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2.5rem;
    justify-items: center;
    max-width: 1400px;
    width: 100%;
    margin-top: 2rem;
  }

  @media (max-width: 900px) {
    padding: 6rem 5%;

    h2 {
      font-size: 2.2rem;
      margin-bottom: 2.5rem;
    }

    .cards {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 5rem 4%;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    .cards {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }
`;
