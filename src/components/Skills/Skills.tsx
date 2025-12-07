import { motion } from "motion/react";
import { skillsIcons } from "../../constants/AboutConstant";

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
        <motion.div 
          className="ability" 
          key={index}
          variants={itemVariants}
        >
          <img
            src={skill.src}
            alt={skill.alt}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
