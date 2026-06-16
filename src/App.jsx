import { useScrollSpy } from './hooks/useScrollSpy.js';
import ParticlesBackground from './components/ParticlesBackground.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';

const SECTION_IDS = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <>
      <ParticlesBackground />
      <CustomCursor />

      <Header activeSection={activeSection} />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
