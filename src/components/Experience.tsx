import { motion } from 'framer-motion';
import { CheckCircle2, Building2, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Professional Journey." subtitle="Experience" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="border-l-4 border-l-primary !rounded-l-none">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{experience.role}</h3>
                <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm">
                  <span className="flex items-center gap-1.5">
                    <Building2 size={14} className="text-primary-light" />
                    {experience.company}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary-light" />
                    {experience.location}
                  </span>
                </div>
              </div>
              <span className="flex items-center gap-1.5 mt-2 sm:mt-0 px-3 py-1 rounded-full bg-primary/10 text-primary-light text-sm font-medium border border-primary/20">
                <Calendar size={14} />
                {experience.period}
              </span>
            </div>

            <ul className="space-y-3">
              {experience.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
