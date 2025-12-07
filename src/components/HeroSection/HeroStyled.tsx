import styled from "styled-components";

export const HeroStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
  padding: 8rem 10% 5rem;
  gap: 4rem;
  position: relative;
  overflow: hidden;
  
  /* Animated Background Elements */
  &::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    top: -200px;
    right: -200px;
    animation: float 8s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
    border-radius: 50%;
    bottom: -150px;
    left: -150px;
    animation: float 10s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
    }
    50% {
      transform: translate(30px, 30px) scale(1.1);
    }
  }

  h1 {
    font-size: clamp(3rem, 8vw, 7rem);
    margin: 0.5rem 0;
    line-height: 1.1;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  .hero-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 55%;
    z-index: 1;
    
    p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
      color: var(--text-secondary);
    }

    h3 {
      font-size: clamp(1.5rem, 3vw, 2.5rem);
      color: var(--primary-light);
      margin: 0.5rem 0 1rem;
      font-weight: 600;
      position: relative;
      display: inline-block;
      min-height: 3.5rem;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--gradient-secondary);
        animation: expandWidth 1s ease-out 0.6s backwards;
      }
    }
    
    .typewriter {
      .cursor {
        animation: blink 1s step-end infinite;
        color: var(--primary-color);
        font-weight: 300;
      }
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    @keyframes expandWidth {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    .greeting {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.3rem;
      font-weight: 500;
      color: var(--text-primary);
      margin-bottom: 0.3rem;
    }
    
    .small-resume {
      font-size: 1.1rem;
      color: var(--text-muted);
      margin: 1rem 0;
      padding: 0.5rem 1rem;
      background: var(--bg-secondary);
      border-radius: 20px;
      border: 1px solid var(--border-color);
    }
  }

  .contact-info {
    margin: 2rem 0;

    button {
      height: 3rem;
      min-width: 13rem;
      padding: 0 2.5rem;
      border: none;
      border-radius: 30px;
      background: var(--gradient-primary);
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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
        transform: translateY(-3px);
        box-shadow: var(--shadow-glow), var(--shadow-lg);
        
        &::before {
          left: 100%;
        }
      }
      
      &:active {
        transform: translateY(-1px);
      }
    }
  }

  .socialmedia {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;

    img {
      height: 3rem;
      width: 3rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      filter: grayscale(20%);
      opacity: 0.9;
    }

    a {
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: var(--primary-color);
        transition: width 0.3s ease;
      }
      
      &:hover {
        img {
          transform: translateY(-8px) scale(1.1);
          filter: grayscale(0%) drop-shadow(0 4px 12px rgba(59, 130, 246, 0.4));
          opacity: 1;
        }
        
        &::after {
          width: 100%;
        }
      }
    }
  }

  .hero-img {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
    div {
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        inset: -20px;
        background: var(--gradient-primary);
        border-radius: 50%;
        opacity: 0.1;
        filter: blur(40px);
        animation: pulse 3s ease-in-out infinite;
      }
    }
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 0.1;
      }
      50% {
        transform: scale(1.1);
        opacity: 0.15;
      }
    }
    
    img {
      max-width: 100%;
      height: auto;
      filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
      animation: levitate 6s ease-in-out infinite;
    }
    
    @keyframes levitate {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-20px);
      }
    }
  }

  @media (max-width: 1200px) {
    padding: 7rem 8% 4rem;
    h1 {
      font-size: clamp(2.8rem, 7vw, 6rem);
    }
  }

  @media (max-width: 992px) {
    gap: 3rem;
    padding: 7rem 5% 4rem;
    
    .hero-info {
      width: 50%;
    }
    
    .hero-img {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 6rem 2rem 3rem;
    gap: 3rem;
    min-height: auto;
    
    .hero-info {
      width: 100%;
      align-items: center;
      text-align: center;
      
      h3::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    .hero-img {
      width: 80%;
      max-width: 400px;
    }
    
    h1 {
      font-size: clamp(2.5rem, 10vw, 4.5rem);
    }
    
    .greeting {
      justify-content: center;
    }
    
    .contact-info button {
      min-width: 11rem;
      padding: 0 2rem;
    }
    
    .socialmedia {
      justify-content: center;
    }
  }

  @media (max-width: 576px) {
    padding: 5rem 1.5rem 2rem;
    
    h1 {
      font-size: clamp(2rem, 12vw, 3.5rem);
    }
    
    .hero-info p {
      font-size: 1rem;
    }
    
    .hero-img {
      width: 100%;
      max-width: 320px;
    }
  }

  @media (max-width: 480px) {
    .socialmedia img {
      height: 2.5rem;
      width: 2.5rem;
    }
    
    .hero-img {
      max-width: 280px;
    }
    
    .contact-info button {
      min-width: 10rem;
      height: 2.8rem;
      font-size: 1rem;
    }
  }
`;
