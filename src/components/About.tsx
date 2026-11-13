import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Target } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const { ref, controls } = useScrollReveal();

  const bentoItems = [
    { icon: GraduationCap, title: 'BCA AI & DS', desc: 'K.R. Mangalam University', color: 'text-blue-400' },
    { icon: Award, title: '9.22/10', desc: 'Academic Performance', color: 'text-emerald-400' },
    { icon: Briefcase, title: 'Data Science Intern', desc: 'The SSL Lock', color: 'text-purple-400' },
    { icon: Target, title: 'Data Analytics & AI', desc: 'Current Focus', color: 'text-cyan-400' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="Beyond the Data." subtitle="About Me" />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Bio */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="space-y-5"
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a BCA student specializing in{' '}
              <span className="text-white font-medium">Artificial Intelligence and Data Science</span>,
              with hands-on experience in data analytics, predictive modeling, dashboard development,
              and software solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Through internships and independent projects, I have developed practical skills in
              Python, SQL, Pandas, Power BI, and Machine Learning.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I enjoy exploring complex datasets, identifying meaningful patterns, and converting
              technical findings into practical business insights.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My goal is to continuously grow at the intersection of{' '}
              <span className="text-primary-light">data</span>,{' '}
              <span className="text-primary-light">technology</span>, and{' '}
              <span className="text-primary-light">artificial intelligence</span>.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {bentoItems.map((item) => (
              <GlassCard key={item.title} hover className="text-center">
                <item.icon size={28} className={`mx-auto mb-3 ${item.color}`} />
                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </GlassCard>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
