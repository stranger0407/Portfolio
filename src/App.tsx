
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from "./components/HeaderSection/Header";
import Hero from './components/HeroSection/Hero';
import { ContainerStyled } from './components/MainSection/MainStyled';
import Projects from './components/Projects/Project';
import { PageTransition } from './components/PageTransition/PageTransitionStyled';

function App() {
  return (
    <>
      <Header />
      <ContainerStyled>
        <PageTransition>
          <Hero/>
          <About/>
          <Projects/>
          <Contact/>
        </PageTransition>
      </ContainerStyled>
    </>
  );
}

export default App;