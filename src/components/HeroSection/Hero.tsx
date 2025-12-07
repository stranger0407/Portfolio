import { motion } from "motion/react"
import Illustration from "../../assets/illustration.svg";
import Hello from "../../assets/Hello.gif";
import { HeroStyled } from "./HeroStyled";
import SocialMedia from "../SocialMedia/SocialMedia";

export default function Hero() {
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

        <motion.h1 variants={itemVariants}>
          Raja Jha
        </motion.h1>
        
        <motion.h3 variants={itemVariants}>
          Full Stack Software Engineer
        </motion.h3>

        <motion.p variants={itemVariants} className="small-resume">
          Transforming Ideas into Elegant and Scalable Solutions
        </motion.p>

        <motion.div variants={itemVariants} className="contact-info">
          <a href="#contact">
            <button>Let's Connect</button>
          </a>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <SocialMedia/>
        </motion.div>
      </motion.div>

      <div className="hero-img">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          <img src={Illustration} alt="illustration" />
        </motion.div>
      </div>
    </HeroStyled>
  );
}
