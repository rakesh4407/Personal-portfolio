import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Download } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div variants={container} initial="hidden" animate="visible" className="order-2 lg:order-1">
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <MapPin size={13} className="text-primary-light" /> {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                🎓 BCA AI & Data Science • CGPA 9.22/10
              </span>
            </motion.div>

            <motion.h1 variants={item} className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold font-heading leading-[1.08] mb-6">
              <span className="text-white">Building Intelligent</span><br />
              <span className="text-white">Systems Through </span>
              <span className="gradient-text">AI,</span><br />
              <span className="gradient-text">Data & Engineering.</span>
            </motion.h1>

            <motion.p variants={item} className="text-lg text-gray-400 leading-relaxed mb-6 max-w-xl">
              {personalInfo.intro}
            </motion.p>

            <motion.div variants={item} className="flex items-center gap-2 mb-7">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-sm text-gray-400">Open to Internship & Project Opportunities</span>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-7">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold transition-all shadow-lg shadow-primary/20 text-sm"
              >
                Explore Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/Rakesh_G_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 font-semibold transition-all text-sm"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <GitHubIcon size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <LinkedInIcon size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/50">
                <div className="rounded-3xl overflow-hidden bg-dark-lighter">
                  <img
                    src="/profile.jpg"
                    alt="Rakesh G — Data Analyst & AI Student"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem] object-cover object-top"
                    loading="eager"
                    width={352}
                    height={352}
                  />
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -bottom-3 -right-3 px-4 py-2 rounded-xl glass-card text-sm font-medium text-white shadow-xl"
              >
                <span className="gradient-text font-semibold">AI & Data Science</span> Student
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
