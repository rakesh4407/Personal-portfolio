import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import TelemetryHUD from './ui/TelemetryHUD';
import { navItems } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ activeSection, onOpenCommandPalette }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    setIsOpen(false);
    const el = document.getElementById(item.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#050811]/90 border-b border-primary/20 shadow-2xl shadow-primary/5'
          : 'bg-[#050811]/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* SpaceX Mission Telemetry Bar */}
      <TelemetryHUD onOpenCommandPalette={onOpenCommandPalette || (() => {})} />

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick('Home'); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm font-heading">
            RG
          </div>
          <span className="font-heading font-semibold text-white group-hover:text-primary-light transition-colors">
            Rakesh G
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => handleNavClick(item)}
              className={`px-2.5 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeSection === item.toLowerCase()
                  ? 'text-primary-light bg-white/5 shadow-inner'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-3">
          {onOpenCommandPalette && (
            <button
              type="button"
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
              title="Open Command Palette (⌘K)"
            >
              <Terminal size={13} className="text-primary-light" />
              <span>⌘K</span>
            </button>
          )}
          <a
            href="https://github.com/rakesh4407"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/rakesh-bca"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="/Rakesh_G_Resume.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary-light border border-primary/20 hover:bg-primary/20 transition-all text-sm font-medium"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden backdrop-blur-xl bg-[#0f172a]/95 border-b border-white/5"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary-light bg-white/5'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {onOpenCommandPalette && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenCommandPalette();
                    }}
                    className="p-2 text-primary-light hover:text-white flex items-center gap-1 text-xs font-mono"
                    title="Command Palette"
                  >
                    <Terminal size={18} />
                    <span>⌘K</span>
                  </button>
                )}
                <a href="https://github.com/rakesh4407" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white"><GitHubIcon size={18} /></a>
                <a href="https://linkedin.com/in/rakesh-bca" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white"><LinkedInIcon size={18} /></a>
                <a href="/Rakesh_G_Resume.pdf" download className="ml-auto flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary-light border border-primary/20 text-sm font-medium">
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
