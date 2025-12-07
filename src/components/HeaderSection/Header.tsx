import { HeaderStyled } from "./HeaderStyled";
import { LogoStyled } from "../Logo/LogoStyled";
import { NavigationStyled } from "../Navigation/NavigationStyled";
import { MobileMenuButtonStyled } from "../MobileMenuButton/MobileMenuButtonStyled";
import Resume from '../../assets/Raja_Rsume _final.pdf'
import { useState } from "react";
export default function Header() {
  const [open,setOpen]=useState(false);
  function HandleToggle(){
    setOpen(!open);
  }
  function handleClose(){
      setOpen(false);
  }
  return (
    <HeaderStyled>
      <LogoStyled>
        <p>{"< Raja Jha />"}</p>
      </LogoStyled>
      <NavigationStyled className={`navigation ${open ? 'open' : ''}`}>
        <a href="#home" onClick={handleClose}>Home</a>
        <a href="#about" onClick={handleClose}>About Me</a>
        <a href="#project" onClick={handleClose}>Projects</a>
        <a href="#contact" onClick={handleClose}>Contact</a>
        <a href={Resume} download onClick={handleClose} ><button>Resume</button></a>
      </NavigationStyled>
      <MobileMenuButtonStyled aria-label="Toggle menu"
       onClick={HandleToggle}>
        ☰
      </MobileMenuButtonStyled>
    </HeaderStyled>
  );
}