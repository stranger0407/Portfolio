import styled, { keyframes } from 'styled-components';
import { motion } from 'motion/react';

const wave = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-10px) scale(1.3);
  }
`;

const glow = keyframes`
  0%, 100% {
    opacity: 0.3;
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
  }
  50% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
  }
`;

const lineExpand = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 0.5;
  }
`;

export const SectionDividerStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 3rem 0;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--gradient-primary);
    animation: ${wave} 1.5s ease-in-out infinite, ${glow} 2s ease-in-out infinite;
    
    &:nth-child(2) {
      animation-delay: 0.15s;
    }
    
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
    
    &:nth-child(4) {
      animation-delay: 0.45s;
    }
    
    &:nth-child(5) {
      animation-delay: 0.6s;
    }
    
    &:nth-child(6) {
      animation-delay: 0.75s;
    }
    
    &:nth-child(7) {
      animation-delay: 0.9s;
    }
  }

  .line {
    flex: 1;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--border-color) 20%,
      var(--primary-color) 50%,
      var(--border-color) 80%,
      transparent 100%
    );
    opacity: 0.5;
    animation: ${lineExpand} 1s ease-out forwards;
    
    &:first-child {
      transform-origin: right;
    }
    
    &:last-child {
      transform-origin: left;
    }
  }
`;

export default function SectionDivider() {
  return (
    <SectionDividerStyled
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <span className="line" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <span className="line" />
    </SectionDividerStyled>
  );
}
