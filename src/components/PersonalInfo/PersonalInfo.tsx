import { motion, useInView } from "motion/react";
import type { RefObject } from "react";
interface PersonalInfoProps {
  aboutInfoRef: RefObject<HTMLDivElement | null>;
}
export default function PersonalInfo({ aboutInfoRef }: PersonalInfoProps) {
  const isInfoInView = useInView(aboutInfoRef, { once: true, amount: 0.3 });
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        About Me
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hey there! I'm Raja, a passionate Software Developer with a strong
        foundation in full-stack web development.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        I create responsive web applications, build clean and scalable frontend
        systems, and enjoy working on collaborative real-time tools.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I also love diving into system design, crafting efficient algorithms,
        and have hands-on experience with technologies like React.js, Node.js
        and Android (Java).
      </motion.p>
    </>
  );
}
