import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, ChevronDown, ChevronUp, BarChart3, Server, Brain, MessageSquare } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const gradients = [
  'from-blue-500/20 to-cyan-500/20',
  'from-purple-500/20 to-pink-500/20',
  'from-emerald-500/20 to-teal-500/20',
  'from-amber-500/20 to-orange-500/20',
];

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'Data Analytics': BarChart3,
  'Full Stack': Server,
  'Machine Learning': Brain,
  'NLP': MessageSquare,
};

const categories = ['All', 'Data Analytics', 'Machine Learning', 'Full Stack', 'NLP'] as const;
type Category = typeof categories[number];

export default function Projects() {
  const { ref, controls } = useScrollReveal(0.05);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading title="Featured Projects." subtitle="My Work" />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 -mt-6">
          {categories.map((cat) => {
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isSelected
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 border border-primary-light/40'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <motion.div
          ref={ref}
          layout
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }}
          className="grid md:grid-cols-2 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isExpanded = expandedId === project.id;
              const CatIcon = categoryIcons[project.category] || BarChart3;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-full glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col group">
                    {/* Header */}
                    <div className={`p-5 bg-gradient-to-br ${gradients[idx % gradients.length]} border-b border-white/5`}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 px-2.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                          <CatIcon size={12} /> {project.category}
                        </span>
                        <span className="text-xs text-white/50 font-mono">#{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white font-heading group-hover:text-primary-light transition-colors">{project.title}</h3>
                      <p className="text-sm text-white/70 mt-1">{project.tagline}</p>
                    </div>

                    {/* Bespoke Visual Telemetry / Dashboard Mockup Header */}
                    {project.id === 1 && (
                      <div className="px-5 py-3 bg-[#070b14] border-b border-white/5 font-mono text-[11px]">
                        <div className="flex justify-between text-gray-500 mb-1.5 text-[10px]">
                          <span>POWER BI / MARGIN DISCREPANCY</span>
                          <span className="text-emerald-400 font-semibold">EXPORT: ~38% MARGIN</span>
                        </div>
                        <div className="space-y-1.5">
                          <div>
                            <div className="flex justify-between text-[10px] text-gray-300">
                              <span>Export Channel (~15% Volume)</span>
                              <span className="text-emerald-400 font-bold">38% Profit Margin</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-0.5">
                              <div className="h-full bg-emerald-400 rounded-full" style={{ width: '88%' }} />
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-[10px] text-gray-400">
                              <span>Wholesale Channel (~45% Volume)</span>
                              <span className="text-gray-400">18% Profit Margin</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mt-0.5">
                              <div className="h-full bg-primary/60 rounded-full" style={{ width: '42%' }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 2 && (
                      <div className="px-5 py-3 bg-[#070b14] border-b border-white/5 font-mono text-[11px]">
                        <div className="flex justify-between text-gray-500 mb-1.5 text-[10px]">
                          <span>TLS HEALTH TELEMETRY</span>
                          <span className="text-emerald-400">AUDIT CADENCE: ACTIVE</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-gray-500 block">Critical (&lt;15d)</span>
                            <span className="text-rose-400 font-bold text-xs">03 Alerts</span>
                          </div>
                          <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-gray-500 block">Urgent (&lt;30d)</span>
                            <span className="text-amber-400 font-bold text-xs">12 Expiring</span>
                          </div>
                          <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
                            <span className="text-[10px] text-gray-500 block">Nominal (&gt;60d)</span>
                            <span className="text-emerald-400 font-bold text-xs">369 Secure</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 3 && (
                      <div className="px-5 py-3 bg-[#070b14] border-b border-white/5 font-mono text-[11px]">
                        <div className="flex justify-between text-gray-500 mb-1.5 text-[10px]">
                          <span>RANDOM FOREST CLASSIFIER</span>
                          <span className="text-primary-light">7,043 TELECOM RECORDS</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex-1 bg-white/5 p-1.5 rounded-lg border border-white/5 text-center">
                            <span className="text-[10px] text-gray-500 block">ROC-AUC</span>
                            <span className="text-primary-light font-bold text-xs">0.84</span>
                          </div>
                          <div className="flex-1 bg-white/5 p-1.5 rounded-lg border border-white/5 text-center">
                            <span className="text-[10px] text-gray-500 block">Class Balance</span>
                            <span className="text-emerald-400 font-bold text-xs">Weighted</span>
                          </div>
                          <div className="flex-1 bg-white/5 p-1.5 rounded-lg border border-white/5 text-center">
                            <span className="text-[10px] text-gray-500 block">Inference</span>
                            <span className="text-cyan-400 font-bold text-xs">&lt;2ms</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 4 && (
                      <div className="px-5 py-3 bg-[#070b14] border-b border-white/5 font-mono text-[11px]">
                        <div className="flex justify-between text-gray-500 mb-1.5 text-[10px]">
                          <span>NLP SENTIMENT MINING</span>
                          <span className="text-cyan-400">MATCH TIMELINE POLARITY</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="h-2 rounded-l-full bg-emerald-400" style={{ width: '64%' }} />
                          <div className="h-2 bg-amber-400" style={{ width: '22%' }} />
                          <div className="h-2 rounded-r-full bg-rose-400" style={{ width: '14%' }} />
                        </div>
                        <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                          <span className="text-emerald-400 font-semibold">64% Positive</span>
                          <span className="text-amber-400">22% Neutral</span>
                          <span className="text-rose-400">14% Negative</span>
                        </div>
                      </div>
                    )}

                    {/* Body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="mb-3">
                        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1">Problem</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{project.problem}</p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : project.id)}
                        className="flex items-center gap-1 text-xs font-medium text-primary-light hover:text-white transition-colors mb-3 self-start cursor-pointer"
                      >
                        {isExpanded ? 'Hide' : 'View'} Solution & Details
                        {isExpanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden mb-3"
                          >
                            <div className="pb-3 border-b border-white/5 space-y-2">
                              <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Solution</h4>
                              <p className="text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mb-4">
                        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-2">Key Outcomes</h4>
                        <ul className="space-y-1.5">
                          {project.achievements.slice(0, 3).map((a, i) => (
                            <li key={i} className="text-sm text-gray-300 flex gap-2">
                              <ArrowUpRight size={13} className="text-primary-light shrink-0 mt-0.5" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded-full bg-primary/10 text-primary-light text-xs font-medium border border-primary/20">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-primary hover:border-primary transition-all self-start shadow-sm"
                        >
                          <ExternalLink size={14} /> View Code
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-sm text-gray-500 self-start cursor-default">
                          <ExternalLink size={14} /> Repo Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
