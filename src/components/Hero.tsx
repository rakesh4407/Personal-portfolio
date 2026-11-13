import { motion } from 'framer-motion';
import { MapPin, ArrowRight, MessageCircle } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <MapPin size={14} className="text-primary-light" />
                Chennai, India
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                🎓 BCA AI & Data Science • CGPA 9.22/10
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-[1.1] mb-6"
            >
              <span className="text-white">Turning Data Into</span>
              <br />
              <span className="gradient-text">Intelligence.</span>
              <br />
              <span className="text-white">Building What's Next.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed mb-8 max-w-xl"
            >
              Hi, I'm <span className="text-white font-medium">Rakesh G</span> — a Data Analyst and
              AI & Data Science student passionate about transforming complex data into meaningful
              insights and building intelligent solutions.
            </motion.p>

            {/* Status */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm text-gray-400">Open to Opportunities</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-primary/25"
              >
                Explore My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-white/20 hover:bg-white/5 font-semibold transition-all duration-200"
              >
                <MessageCircle size={18} />
                Let's Connect
              </a>
            </motion.div>

            {/* Social */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a
                href="https://github.com/rakesh4407"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rakesh-bca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <LinkedInIcon size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              {/* Border ring */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-primary/50 to-accent/50">
                <div className="rounded-3xl overflow-hidden bg-dark-lighter">
                  <img
                    src="/profile.jpg"
                    alt="Rakesh G — Data Analyst & AI Student"
                    className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl glass-card text-sm font-medium text-white shadow-xl"
              >
                <span className="gradient-text font-semibold">Data Analyst</span> & AI Student
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
