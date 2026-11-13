import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { achievements } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Achievements() {
  const { ref, controls } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Recognition & Credentials." subtitle="Achievements" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <GlassCard hover className="h-full text-center">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                    item.type === 'hackathon'
                      ? 'bg-purple-500/10 border border-purple-500/20'
                      : 'bg-blue-500/10 border border-blue-500/20'
                  }`}
                >
                  {item.type === 'hackathon' ? (
                    <Trophy size={22} className="text-purple-400" />
                  ) : (
                    <Award size={22} className="text-blue-400" />
                  )}
                </div>
                <h3 className="font-semibold text-white text-sm mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 mb-3">{item.organization}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    item.type === 'hackathon'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}
                >
                  {item.date}
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
