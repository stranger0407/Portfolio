import styled from "styled-components";

export const ProjectCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 450px;
  padding: 2rem;
  gap: 1.5rem;
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  box-shadow: var(--shadow-md);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-glow), var(--shadow-lg);
    border-color: var(--primary-color);
    
    &::before {
      transform: scaleX(1);
    }
  }

  .link {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    margin-bottom: 0.5rem;

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      padding: 0.5rem;
      border-radius: 10px;
      background: var(--bg-secondary);
      border: 1px solid var(--border-color);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: var(--primary-color);
        border-color: var(--primary-color);
        transform: scale(1.1) rotate(5deg);
        box-shadow: var(--shadow-glow);
      }

      img {
        height: 24px;
        width: 24px;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
          brightness(103%) contrast(103%);
        transition: filter 0.3s ease;
      }
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    overflow: hidden;

    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-primary);
      letter-spacing: 0.02em;
      line-height: 1.3;
      background: var(--gradient-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      min-height: 2rem;
    }

    .description {
      font-size: 1rem;
      color: var(--text-secondary);
      line-height: 1.6;
      height: 120px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
    }
  }

  .footer {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: flex-start;
    margin-top: auto;
    min-height: 60px;
    align-content: flex-start;

    span {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
      color: var(--primary-light);
      font-size: 0.85rem;
      font-weight: 600;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      border: 1px solid rgba(59, 130, 246, 0.3);
      user-select: none;
      transition: all 0.3s ease;

      &:hover {
        background: var(--gradient-primary);
        color: white;
        border-color: var(--primary-color);
        transform: translateY(-2px);
        box-shadow: var(--shadow-sm);
        cursor: default;
      }
    }
  }

  @media (max-width: 900px) {
    max-width: 100%;
    height: 420px;
    padding: 1.8rem;
  }

  @media (max-width: 480px) {
    height: 400px;
    padding: 1.5rem;

    .description .title {
      font-size: 1.3rem;
    }

    .description .description {
      font-size: 0.95rem;
      min-height: 3.5rem;
    }

    .footer span {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }
  }
`;
