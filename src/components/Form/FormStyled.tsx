import styled from "styled-components";

export const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  
  #form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
    width: 100%;
  }
  
  #email,
  #name,
  #messege {
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 2px solid var(--border-color);
    background: var(--bg-card);
    color: var(--text-primary);
    font-size: 1rem;
    font-family: 'Inter', sans-serif;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    
    &::placeholder {
      color: var(--text-muted);
    }
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      transform: translateY(-2px);
    }
    
    &:hover {
      border-color: var(--primary-light);
    }
  }
  
  #email,
  #name {
    height: 3.5rem;
    width: 100%;
  }
  
  #messege {
    min-height: 12rem;
    width: 100%;
    resize: vertical;
    padding-top: 1rem;
    word-wrap: break-word;
    line-height: 1.6;
  }
  
  button {
    height: 3.5rem;
    min-width: 10rem;
    padding: 0 2.5rem;
    background: var(--gradient-primary);
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    align-self: center;
    box-shadow: var(--shadow-md);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
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
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 1rem;
  }
  
  @media (max-width: 600px) {
    #email,
    #name {
      height: 3rem;
      font-size: 0.95rem;
    }
    
    #messege {
      min-height: 10rem;
      font-size: 0.95rem;
    }
    
    button {
      height: 3rem;
      min-width: 8rem;
      font-size: 1rem;
    }
  }
`;
