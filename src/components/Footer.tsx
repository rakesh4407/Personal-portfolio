import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { navItems, personalInfo } from '../data/portfolioData';

export default function Footer() {
  const handleNavClick = (item: string) => {
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm font-heading">
              RG
            </div>
            <div>
              <p className="font-heading font-semibold text-white">Rakesh G</p>
              <p className="text-xs text-gray-500">Data Analyst & AI Student</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
              <GitHubIcon size={18} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
              <LinkedInIcon size={18} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="p-2 text-gray-400 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rakesh G. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-1 flex items-center justify-center gap-1">
            Built with passion <Heart size={12} className="text-red-400" /> and purpose.
          </p>
        </div>
      </div>
    </footer>
  );
}
