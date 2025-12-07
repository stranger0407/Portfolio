import { HeaderStyled } from "./HeaderStyled";
import { LogoStyled } from "../Logo/LogoStyled";
import { NavigationStyled } from "../Navigation/NavigationStyled";
import { MobileMenuButtonStyled } from "../MobileMenuButton/MobileMenuButtonStyled";
import Resume from '../../assets/resume-new.pdf'
import { useState, useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header background on scroll
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = ['home', 'about', 'project', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function HandleToggle() {
    setOpen(!open);
  }
  
  function handleClose() {
    setOpen(false);
  }

  return (
    <HeaderStyled className={isScrolled ? 'scrolled' : ''}>
      <LogoStyled>
        <p>{"< Raja Jha />"}</p>
      </LogoStyled>
      <NavigationStyled className={`navigation ${open ? 'open' : ''}`}>
        <a href="#home" onClick={handleClose} className={activeSection === 'home' ? 'active' : ''}>Home</a>
        <a href="#about" onClick={handleClose} className={activeSection === 'about' ? 'active' : ''}>About Me</a>
        <a href="#project" onClick={handleClose} className={activeSection === 'project' ? 'active' : ''}>Projects</a>
        <a href="#contact" onClick={handleClose} className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        <a href={Resume} download onClick={handleClose}><button>Resume</button></a>
      </NavigationStyled>
      <MobileMenuButtonStyled aria-label="Toggle menu" onClick={HandleToggle}>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
        <span className={open ? 'open' : ''}></span>
      </MobileMenuButtonStyled>
    </HeaderStyled>
  );
}