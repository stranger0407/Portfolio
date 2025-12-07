import { ProjectStyled } from "./ProjectStyled";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../constants/ProjectConstant";
import { motion } from "motion/react";

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
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
    <ProjectStyled id="project">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>
      
      <motion.div 
        className="cards"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
      >
        {projects.map((val) => {
          return (
            <motion.div key={val.title} variants={itemVariants}>
              <ProjectCard
                title={val.title}
                githubProp={val.github}
                live={val.live}
                desc={val.desc}
                technology={val.technology}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </ProjectStyled>
  );
}