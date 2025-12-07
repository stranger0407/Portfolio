import styled from "styled-components";

export const AboutStyled = styled.section`
  display: flex;
  padding: 6rem 10%;
  position: relative;
  flex-direction: column-reverse;
  min-height: 100vh;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }

  .about-info {
    flex: 3;
    padding-right: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    p:first-child {
      font-size: 2.2rem;
      font-weight: 700;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1.5rem;
    }

    p {
      margin-bottom: 1.5rem;
      font-size: 1.15rem;
      line-height: 1.8;
      color: var(--text-secondary);
    }
    
    @media (max-width: 991px) {
      padding-right: 0;
    }
  }

  .about-img {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 20px;
      box-shadow: var(--shadow-lg);
      border: 3px solid var(--border-color);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      &:hover {
        transform: scale(1.05);
        box-shadow: var(--shadow-glow), var(--shadow-lg);
        border-color: var(--primary-color);
      }
    }

    @media (max-width: 991px) {
      margin-bottom: 3rem;
    }
  }

  .education,
  .experience {
    margin: 2rem 0;
    padding: 2rem;
    background: var(--bg-card);
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-md);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: var(--gradient-primary);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      border-color: var(--primary-color);
    }

    h3 {
      font-size: 1.5rem;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    h4 {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
      font-weight: 600;
    }

    h5 {
      font-size: 1.15rem;
      margin-bottom: 0.5rem;
      color: var(--text-primary);
      font-weight: 500;
    }

    p {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: var(--text-muted);
    }
  }

  h3 {
    text-align: center;
    margin: 2rem 0 1.5rem;
    font-size: 1.8rem;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 700;
  }

  .hard-skills {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 2rem;
    width: 100%;
    max-width: 600px;

    @media (min-width: 576px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
      max-width: 500px;
    }

    @media (min-width: 992px) {
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
      max-width: 100%;
    }

    .ability {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem;
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: var(--shadow-sm);
      position: relative;
      overflow: hidden;
      aspect-ratio: 1;
      min-height: 60px;
      
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--gradient-primary);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      &:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: var(--shadow-glow), var(--shadow-md);
        border-color: var(--primary-color);
        
        &::before {
          opacity: 0.1;
        }
      }

      img {
        width: 100%;
        height: 100%;
        max-width: 35px;
        max-height: 35px;
        object-fit: contain;
        position: relative;
        z-index: 1;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
      }
    }
  }
`;
