import { motion } from "motion/react"
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";

const socialLinks = [
  { href: "https://linkedin.com/in/raja", icon: linkedin, alt: "linkedin", label: "LinkedIn Profile" },
  { href: "https://github.com/Raja-Simform", icon: githubIcon, alt: "github", label: "GitHub Profile" },
  { 
    href: "https://leetcode.com/u/rgjha2001", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png", 
    alt: "leetcode", 
    label: "LeetCode Profile",
    style: { filter: 'invert(1)' }
  },
  { 
    href: "https://api.whatsapp.com/send/?phone=%2B919106813893&text=Hello+Raja+I+found+your+contact+through+portfolio+site.%0A%0A", 
    icon: whatsapp, 
    alt: "whatsapp", 
    label: "WhatsApp Contact" 
  },
];

export default function SocialMedia(){
    return(
        <motion.div
        className="socialmedia"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.alt}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            whileHover={{ 
              scale: 1.2, 
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img 
              src={social.icon} 
              alt={social.alt}
              style={social.style}
              whileHover={{
                filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))"
              }}
            />
          </motion.a>
        ))}
      </motion.div>
    )
}