import { motion } from 'framer-motion';
import { Code2, BarChart3, PieChart, Brain, Sparkles, Server } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, BarChart3, PieChart, Brain, Sparkles, Server,
};

export default function Skills() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Arsenal." subtitle="Skills & Technologies" />
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><Icon size={18} className="text-primary-light" /></div>}
                    <h3 className="font-semibold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10 hover:border-primary/40 hover:text-primary-light transition-all duration-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
