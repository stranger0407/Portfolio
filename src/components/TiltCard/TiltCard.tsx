import { useState, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import styled from 'styled-components';

const TiltWrapper = styled(motion.div)`
  perspective: 1000px;
  transform-style: preserve-3d;
`;

const TiltContent = styled(motion.div)`
  transform-style: preserve-3d;
  will-change: transform;
`;

const Glare = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.1) 40%,
      transparent 60%
    );
    transform: translateX(-100%) translateY(-100%);
    transition: transform 0.3s ease-out;
  }
`;

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glareEnable?: boolean;
}

export default function TiltCard({ 
  children, 
  className,
  maxTilt = 15,
  glareEnable = true 
}: TiltCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateXValue = (mouseY / (rect.height / 2)) * -maxTilt;
    const rotateYValue = (mouseX / (rect.width / 2)) * maxTilt;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
    
    // Update glare position
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <TiltWrapper
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <TiltContent
        animate={{
          rotateX,
          rotateY,
          transformPerspective: 1000,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
        {glareEnable && (
          <Glare
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
            }}
          />
        )}
      </TiltContent>
    </TiltWrapper>
  );
}
