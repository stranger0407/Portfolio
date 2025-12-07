import { motion } from "motion/react"
import Illustration from "../../assets/illustration.svg";
import Hello from "../../assets/Hello.gif";
import { HeroStyled } from "./HeroStyled";
import SocialMedia from "../SocialMedia/SocialMedia";
import { useState, useEffect } from "react";

// Typewriter hook for animated text
function useTypewriter(texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
}

export default function Hero() {
  const roles = [
    "Full Stack Software Engineer",
    "React.js Developer",
    "Spring Boot Developer",
    "Problem Solver"
  ];
  
  const typedText = useTypewriter(roles, 80, 40, 2000);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <HeroStyled id="home">
      <motion.div 
        className="hero-info"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="greeting">
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </motion.p>

        <motion.h1 
          variants={itemVariants}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          Raja Jha
        </motion.h1>
        
        <motion.h3 variants={itemVariants} className="typewriter">
          {typedText}<span className="cursor">|</span>
        </motion.h3>

        <motion.p variants={itemVariants} className="small-resume">
          Transforming Ideas into Elegant and Scalable Solutions
        </motion.p>

        <motion.div variants={itemVariants} className="contact-info">
          <a href="#contact">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Let's Connect
            </motion.button>
          </a>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SocialMedia/>
        </motion.div>
      </motion.div>

      <div className="hero-img">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
          whileHover={{ 
            scale: 1.05,
            rotate: 2,
            transition: { duration: 0.4 }
          }}
        >
          <motion.img 
            src={Illustration} 
            alt="illustration"
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </HeroStyled>
  );
}
