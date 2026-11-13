import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, ArrowUpRight, ChevronDown, ChevronUp, BarChart3, Server, Brain } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const gradients = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-emerald-500/20 to-teal-500/20',
];

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Data Analytics': BarChart3,
  'Full Stack': Server,
  'Machine Learning': Brain,
};

export default function Projects() {
  const { ref, controls } = useScrollReveal(0.05);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects." subtitle="My Work" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => {
            const isExpanded = expandedId === project.id;
            const CategoryIcon = categoryIcons[project.category] || FolderGit2;

            return (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-br ${gradients[idx]} relative`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CategoryIcon size={24} className="text-white/80" />
                        <span className="text-xs font-medium text-white/70 px-2.5 py-1 rounded-full bg-white/10 border border-white/10">
                          {project.category}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-white/50 font-mono">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mt-4 font-heading">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/60 mt-1">{project.tagline}</p>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Problem Statement */}
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                        Problem
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* Expandable Methodology */}
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : project.id)}
                      className="flex items-center gap-1 text-xs font-medium text-primary-light hover:text-white transition-colors mb-3 self-start"
                    >
                      {isExpanded ? 'Hide' : 'View'} Methodology
                      {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden mb-3"
                        >
                          <p className="text-sm text-gray-400 leading-relaxed pb-3 border-b border-white/5">
                            {project.methodology}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Key Highlights */}
                    <div className="mb-5">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Key Outcomes
                      </h4>
                      <ul className="space-y-1.5">
                        {project.achievements.slice(0, 3).map((a, i) => (
                          <li key={i} className="text-sm text-gray-300 flex gap-2">
                            <ArrowUpRight size={14} className="text-primary-light shrink-0 mt-0.5" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-full bg-primary/10 text-primary-light text-xs font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                      >
                        <ExternalLink size={14} />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
