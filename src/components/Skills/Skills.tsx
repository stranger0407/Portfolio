import { motion } from "motion/react";
import { skillsIcons } from "../../constants/AboutConstant";
import styled from "styled-components";

const SkillItem = styled(motion.div)`
  position: relative;
  
  &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -35px;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.4rem 0.8rem;
    background: var(--bg-tertiary);
    color: var(--text-primary);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 10;
    box-shadow: var(--shadow-md);
    border: 1px solid var(--border-color);
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-bottom-color: var(--bg-tertiary);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  
  &:hover::after,
  &:hover::before {
    opacity: 1;
    visibility: visible;
  }
`;

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <motion.div 
      className="hard-skills"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skillsIcons.map((skill, index) => (
        <SkillItem 
          className="ability" 
          key={index}
          variants={itemVariants}
          data-tooltip={skill.alt}
          whileHover={{ 
            scale: 1.15,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        >
          <img
            src={skill.src}
            alt={skill.alt}
          />
        </SkillItem>
      ))}
    </motion.div>
  );
}
