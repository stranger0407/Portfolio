import styled from 'styled-components';
import { motion } from 'motion/react';

const FloatingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
`;

const FloatingShape = styled(motion.div)<{ $color: string; $size: number }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border-radius: 50%;
  background: ${props => props.$color};
  filter: blur(60px);
  opacity: 0.4;
`;

const shapes = [
  { x: '10%', y: '20%', size: 300, color: 'rgba(59, 130, 246, 0.3)', duration: 20 },
  { x: '80%', y: '10%', size: 250, color: 'rgba(139, 92, 246, 0.3)', duration: 25 },
  { x: '70%', y: '70%', size: 350, color: 'rgba(16, 185, 129, 0.25)', duration: 30 },
  { x: '20%', y: '80%', size: 200, color: 'rgba(59, 130, 246, 0.25)', duration: 22 },
  { x: '50%', y: '50%', size: 400, color: 'rgba(139, 92, 246, 0.2)', duration: 35 },
];

export default function FloatingShapes() {
  return (
    <FloatingContainer>
      {shapes.map((shape, index) => (
        <FloatingShape
          key={index}
          $color={shape.color}
          $size={shape.size}
          initial={{ 
            x: shape.x, 
            y: shape.y,
            scale: 1
          }}
          animate={{
            x: [shape.x, `calc(${shape.x} + 50px)`, `calc(${shape.x} - 30px)`, shape.x],
            y: [shape.y, `calc(${shape.y} - 40px)`, `calc(${shape.y} + 60px)`, shape.y],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </FloatingContainer>
  );
}
