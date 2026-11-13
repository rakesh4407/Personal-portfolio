import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const { ref, controls } = useScrollReveal();

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Academic Foundation." subtitle="Education" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard className="text-center p-8 sm:p-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
              <GraduationCap size={32} className="text-primary-light" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              {education.degree}
            </h3>

            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium mb-4">
              {education.specialization}
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400 text-sm mb-8">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary-light" />
                {education.university}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary-light" />
                {education.period}
              </span>
            </div>

            {/* CGPA */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">CGPA</p>
              <p className="text-5xl font-bold gradient-text font-heading mb-4">
                {education.cgpa}
              </p>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92.2%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
