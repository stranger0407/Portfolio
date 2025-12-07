import github from "../../assets/github.svg";
import externalLink from "../../assets/external-link-icon.svg";
import { ProjectCardStyled } from "./ProjectCardStyled";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ProjectCardProps } from "./ProjectCardInterface";
import TiltCard from "../TiltCard/TiltCard";

export default function ProjectCard({
  githubProp,
  live,
  title,
  desc,
  technology,
}: ProjectCardProps) {
  const repoRef = useRef(null);
  const descRef = useRef(null);
  const footerRef = useRef(null);
  const isRepoInView = useInView(repoRef, { amount: 0.1 });
  const isDescInView = useInView(descRef, { amount: 0.1 });
  const isFooterInView = useInView(footerRef, { amount: 0.1 });
  
  return (
    <TiltCard maxTilt={8} glareEnable={true}>
      <ProjectCardStyled>
        <motion.div
          ref={repoRef}
          className="link"
          initial={{ opacity: 0, y: 50 }}
          animate={isRepoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.a
            href={githubProp}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Link"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={github} alt="github" />
          </motion.a>
          <motion.a 
            href={live} 
            target="_blank" 
            rel="noreferrer" 
            aria-label="Live Link"
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src={externalLink} alt="live demo" />
          </motion.a>
        </motion.div>
        <motion.div
          className="description"
          ref={descRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.div 
            className="title"
            whileHover={{ scale: 1.02 }}
          >
            {title}
          </motion.div>
          <div className="description">{desc}</div>
        </motion.div>
        <motion.div
          className="footer"
          ref={footerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {technology.map((value: string, index: number) => {
            return (
              <motion.span 
                key={`tech-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -3,
                  transition: { duration: 0.2 }
                }}
              >
                {value}
              </motion.span>
            );
          })}
        </motion.div>
      </ProjectCardStyled>
    </TiltCard>
  );
}
