import { motion } from 'framer-motion';
import { Brain, Cpu, BarChart3, Database, MessageSquare, Sparkles, Rocket } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { learningInterests } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Brain, Cpu, BarChart3, Database, MessageSquare, Sparkles, Rocket,
};

export default function Learning() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading title="Exploring What's Next." subtitle="Current Learning" />

        <p className="text-center text-gray-400 mb-12 -mt-8 max-w-xl mx-auto">
          Areas I'm actively exploring and building skills in
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto"
        >
          {learningInterests.map((interest) => {
            const Icon = iconMap[interest.icon];
            return (
              <motion.div
                key={interest.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="glass-card rounded-xl px-5 py-3 flex items-center gap-3 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 cursor-default"
              >
                {Icon && <Icon size={18} className="text-accent" />}
                <span className="text-sm font-medium text-gray-200">{interest.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <p className="text-center text-xs text-gray-600 mt-8">
          These represent learning interests, not claimed expertise.
        </p>
      </div>
    </section>
  );
}
