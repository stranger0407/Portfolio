import { AboutStyled } from "./AboutStyled";
import { motion, useInView } from "motion/react";
import rajaImg from "../../assets/raja.png";
import { useRef } from "react";
import Skills from "../Skills/Skills";
import PersonalInfo from "../PersonalInfo/PersonalInfo";

export default function About() {
  const aboutInfoRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const imageRef = useRef(null);
  const skillsTitleRef = useRef(null);

  const isEducationInView = useInView(educationRef, {
    once: true,
    amount: 0.3,
  });
  const isExperienceInView = useInView(experienceRef, {
    once: true,
    amount: 0.3,
  });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.2 });
  const isSkillsTitleInView = useInView(skillsTitleRef, {
    once: true,
    amount: 0.5,
  });

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  return (
    <AboutStyled id="about">
      <div className="about-info" ref={aboutInfoRef}>
        <PersonalInfo aboutInfoRef={aboutInfoRef} />
        
        <motion.div
          className="education"
          ref={educationRef}
          variants={cardVariants}
          initial="hidden"
          animate={isEducationInView ? "visible" : "hidden"}
        >
          <h3>🎓 Education</h3>
          <h5>Bachelor of Engineering (B.E.) in Computer Engineering</h5>
          <p>L.D. College of Engineering</p>
          <p>CGPA: 8.6/10.0</p>
        </motion.div>
        
        <motion.div
          className="experience"
          ref={experienceRef}
          variants={cardVariants}
          initial="hidden"
          animate={isExperienceInView ? "visible" : "hidden"}
        >
          <h3>💼 Professional Experience</h3>
          <h4>Programmer Analyst Trainee</h4>
          <p>Cognizant Technology Solutions | 2025 - Present</p>
          <p>📍 India</p>
          <br/>
          <h4>React.js Developer Intern</h4>
          <p>Simform Solutions | Jan 2025 - May 2025</p>
          <p>📍 Ahmedabad, India</p>
        </motion.div>
      </div>

      <div className="about-img">
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          <img src={rajaImg} alt="profile-picture" />
        </motion.div>
        
        <motion.h3
          ref={skillsTitleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isSkillsTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ 
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
          }}
        >
          🚀 Technical Skills
        </motion.h3>
        
        <Skills />
      </div>
    </AboutStyled>
  );
}
