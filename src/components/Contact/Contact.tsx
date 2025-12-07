import Form from "../Form/Form";
import { ContactStyled } from "./ContactStyled";
import { motion } from "motion/react";

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "rgjha2001@gmail.com",
      link: "mailto:rgjha2001@gmail.com",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9106813893",
      link: "tel:+919106813893",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Pune, India",
      link: "#",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com/in/raja",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    }
  ];

  return (
    <ContactStyled id="contact">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Get In Touch</h2>
        <p className="subtitle">Let's create something amazing together! 🚀</p>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info-section"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="info-header">
            <h3>Contact Information</h3>
            <p>Feel free to reach out through any of these channels</p>
          </div>

          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noreferrer"
                className="contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="icon-wrapper" style={{ background: info.gradient }}>
                  <span className="icon">{info.icon}</span>
                </div>
                <div className="card-content">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div 
            className="social-connect"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <p>Or connect on social media</p>
            <div className="social-links">
              <a href="https://linkedin.com/in/raja" target="_blank" rel="noreferrer" className="social-icon linkedin">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/Raja-Simform" target="_blank" rel="noreferrer" className="social-icon github">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://leetcode.com/u/rgjha2001" target="_blank" rel="noreferrer" className="social-icon leetcode">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.776-1.649-7.872.537l-2.35 2.443-.011.011c-.165.17-.315.353-.451.548a4.56 4.56 0 0 0-.765 1.615 4.413 4.413 0 0 0-.096.734 4.45 4.45 0 0 0 1.337 3.276l4.276 4.193c.706.693 1.586 1.046 2.465 1.046.896 0 1.791-.36 2.498-1.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.914-5.776-1.649-7.872.537l-2.35 2.443-.011.011c-.165.17-.315.353-.451.548a4.56 4.56 0 0 0-.765 1.615 4.413 4.413 0 0 0-.096.734 4.45 4.45 0 0 0 1.337 3.276l4.276 4.193c.706.693 1.586 1.046 2.465 1.046z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="contact-form-section"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="form-header">
            <h3>Send Me a Message</h3>
            <p>I'll get back to you within 24 hours</p>
          </div>
          <Form />
        </motion.div>
      </div>
    </ContactStyled>
  );
}