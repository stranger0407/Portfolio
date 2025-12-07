import styled from 'styled-components';

export const ScrollProgress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--gradient-primary);
  z-index: 9999;
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-color);
  color: var(--primary-color);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    background: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
    box-shadow: var(--shadow-glow);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .progress-ring {
    position: absolute;
    top: -2px;
    left: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    pointer-events: none;

    svg {
      width: 100%;
      height: 100%;
      
      circle {
        stroke: var(--primary-color);
        opacity: 0.5;
        transition: stroke-dasharray 0.1s ease-out;
      }
    }
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }
`;
