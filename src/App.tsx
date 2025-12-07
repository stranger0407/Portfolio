
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from "./components/HeaderSection/Header";
import Hero from './components/HeroSection/Hero';
import { ContainerStyled } from './components/MainSection/MainStyled';
import Projects from './components/Projects/Project';
import { PageTransition } from './components/PageTransition/PageTransitionStyled';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import SectionDivider from './components/SectionDivider/SectionDivider';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import MagneticCursor from './components/MagneticCursor/MagneticCursor';
import FloatingShapes from './components/FloatingShapes/FloatingShapes';

function App() {
  return (
    <>
      <ParticleBackground />
      <FloatingShapes />
      <MagneticCursor />
      <ScrollToTop />
      <Header />
      <ContainerStyled>
        <PageTransition>
          <Hero/>
          <SectionDivider />
          <About/>
          <SectionDivider />
          <Projects/>
          <SectionDivider />
          <Contact/>
        </PageTransition>
      </ContainerStyled>
    </>
  );
}

export default App;