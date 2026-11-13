import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div className="min-h-screen bg-dark text-white">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar activeSection={activeSection} />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
