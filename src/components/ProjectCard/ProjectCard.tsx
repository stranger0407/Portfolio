import github from "../../assets/github.svg";
import externalLink from "../../assets/external-link-icon.svg";
import { ProjectCardStyled } from "./ProjectCardStyled";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import type { ProjectCardProps } from "./ProjectCardInterface";
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
    <ProjectCardStyled>
      <motion.div
        ref={repoRef}
        className="link"
        initial={{ opacity: 0, y: 50 }}
        animate={isRepoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <a
          href={githubProp}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Link"
        >
          <img src={github} alt="github" />
        </a>
        <a href={live} target="_blank" rel="noreferrer" aria-label="Live Link">
          <img src={externalLink} alt="github" />
        </a>
      </motion.div>
      <motion.div
        className="description"
        ref={descRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isDescInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="title">{title}</div>
        <div className="description">{desc}</div>
      </motion.div>
      <motion.div
        className="footer"
        ref={footerRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {technology.map((value: string,index:number) => {
          return <span key={`tech-${index}`}>{value}</span>;
        })}
      </motion.div>
    </ProjectCardStyled>
  );
}
