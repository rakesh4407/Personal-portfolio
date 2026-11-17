import { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ArchitectureVisualizer from './components/ArchitectureVisualizer';
import ModelSimulator from './components/ModelSimulator';
import Projects from './components/Projects';
import TechnicalNotes from './components/TechnicalNotes';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NeuralCanvas from './components/ui/NeuralCanvas';
import CommandPalette from './components/ui/CommandPalette';

export default function App() {
  const activeSection = useActiveSection();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-white selection:bg-primary/30 selection:text-white relative">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* SpaceX / NVIDIA Neural Synapse Matrix Canvas */}
      <NeuralCanvas />

      {/* Global Navigation Bar with integrated Mission Telemetry */}
      <Navbar
        activeSection={activeSection}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      <main id="main-content" className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* System Architectures & Pipeline Blueprints */}
        <ArchitectureVisualizer />
        {/* NVIDIA AI Lab / Live Model Inference Playground */}
        <ModelSimulator />
        <Projects />
        {/* Engineering Logs & Case Studies */}
        <TechnicalNotes />
        <Education />
        <Achievements />
        <Learning />
        <Contact />
      </main>

      <Footer />
      <BackToTop />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </div>
  );
}
