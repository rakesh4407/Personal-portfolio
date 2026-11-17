import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FolderGit2, Cpu, GraduationCap, Briefcase, Download, Mail, ArrowRight, ExternalLink, X, Sparkles, Layers, BookOpen } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction?: (actionId: string) => void;
}

interface CommandItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  category: 'Navigation' | 'Interactive AI' | 'Dossier & Social';
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose, onSelectAction }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setQuery('');
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  const scrollTo = (id: string) => {
    handleClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const commands: CommandItem[] = [
    {
      id: 'model-sim',
      title: 'Run Live ML Inference Simulator',
      description: 'Interact with client-side Customer Churn risk model',
      icon: Sparkles,
      category: 'Interactive AI',
      action: () => {
        handleClose();
        if (onSelectAction) onSelectAction('model-sim');
        setTimeout(() => {
          document.getElementById('ai-playground')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      },
    },
    {
      id: 'architecture',
      title: 'Inspect System Architecture Blueprints',
      description: 'Review end-to-end data pipeline diagrams and phases',
      icon: Layers,
      category: 'Navigation',
      action: () => scrollTo('architecture'),
    },
    {
      id: 'projects',
      title: 'Explore Featured Projects',
      description: 'View 4 verified engineering repos and architectures',
      icon: FolderGit2,
      category: 'Navigation',
      action: () => scrollTo('projects'),
    },
    {
      id: 'notes',
      title: 'Read Engineering Logs & Case Studies',
      description: 'Technical writeups on class imbalance, TLS sockets & EDA',
      icon: BookOpen,
      category: 'Navigation',
      action: () => scrollTo('notes'),
    },
    {
      id: 'skills',
      title: 'Inspect Technical Arsenal',
      description: 'Review Python, SQL, ML, Deep Learning & BI stack',
      icon: Cpu,
      category: 'Navigation',
      action: () => scrollTo('skills'),
    },
    {
      id: 'experience',
      title: 'View Flight Log (Experience)',
      description: 'Data Science Intern at The SSL Lock (1 Year)',
      icon: Briefcase,
      category: 'Navigation',
      action: () => scrollTo('experience'),
    },
    {
      id: 'education',
      title: 'Review Academic Foundation',
      description: 'BCA AI & Data Science • 9.22/10 CGPA',
      icon: GraduationCap,
      category: 'Navigation',
      action: () => scrollTo('education'),
    },
    {
      id: 'resume',
      title: 'Download Official Resume (PDF)',
      description: 'Direct download of verified 2-page curriculum vitae',
      icon: Download,
      category: 'Dossier & Social',
      action: () => {
        handleClose();
        const link = document.createElement('a');
        link.href = '/Rakesh_G_Resume.pdf';
        link.download = 'Rakesh_G_Resume.pdf';
        link.click();
      },
    },
    {
      id: 'copy-email',
      title: `Copy Email (${personalInfo.email})`,
      description: 'Copy primary contact address to clipboard',
      icon: Mail,
      category: 'Dossier & Social',
      action: () => {
        navigator.clipboard.writeText(personalInfo.email);
        handleClose();
      },
    },
    {
      id: 'github',
      title: 'Open GitHub Profile',
      description: 'Explore live repositories and commit history',
      icon: ExternalLink,
      category: 'Dossier & Social',
      action: () => {
        window.open(personalInfo.github, '_blank');
        handleClose();
      },
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn Profile',
      description: 'Connect with Rakesh G professionally',
      icon: ExternalLink,
      category: 'Dossier & Social',
      action: () => {
        window.open(personalInfo.linkedin, '_blank');
        handleClose();
      },
    },
  ];

  const filtered = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase()) ||
    cmd.description.toLowerCase().includes(query.toLowerCase()) ||
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        handleClose();
      }
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filtered[selectedIndex]) {
          filtered[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filtered, selectedIndex, handleClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-xl rounded-2xl bg-[#090d16] border border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden z-10"
          >
            {/* Header / Input */}
            <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <Search size={18} className="text-primary-light shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search mission components..."
                className="w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-mono"
              />
              <button
                type="button"
                onClick={handleClose}
                className="p-1 rounded text-gray-400 hover:text-white transition-colors ml-2 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-sm text-gray-500 font-mono">
                  No telemetry or command matched "{query}"
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-primary/20 border border-primary/40 text-white'
                          : 'hover:bg-white/5 text-gray-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-primary text-white' : 'bg-white/5 text-primary-light'
                          }`}
                        >
                          <Icon size={16} />
                        </div>
                        <div className="truncate">
                          <p className="text-sm font-semibold truncate flex items-center gap-2">
                            {item.title}
                            <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-white/5 text-gray-400 border border-white/10">
                              {item.category}
                            </span>
                          </p>
                          <p className="text-xs text-gray-400 truncate">{item.description}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className={`shrink-0 ml-2 transition-transform ${
                          isSelected ? 'text-primary-light translate-x-1' : 'text-gray-600'
                        }`}
                      />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Telemetry */}
            <div className="px-4 py-2 bg-[#050811] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>SPACEX / NVIDIA HUD MODE</span>
              </span>
              <span className="flex items-center gap-2">
                <span>Navigate: <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10">↓</kbd></span>
                <span>Select: <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10">↵</kbd></span>
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
