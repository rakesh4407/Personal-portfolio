import { motion } from 'framer-motion';
import { Code2, BarChart3, PieChart, Database, Brain, Globe } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Code2, BarChart3, PieChart, Database, Brain, Globe,
};

export default function Skills() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading title="Technical Arsenal." subtitle="Skills & Technologies" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={skill.category}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <GlassCard hover className="h-full">
                  <div className="flex items-center gap-3 mb-5">
                    {Icon && <Icon size={22} className="text-primary-light" />}
                    <h3 className="font-semibold text-white text-lg">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-full bg-white/5 text-sm text-gray-300 border border-white/10 hover:border-primary/40 hover:text-primary-light transition-all duration-200"
                      >
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
