import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { ref, controls } = useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'rakesh-bca', href: personalInfo.linkedin },
    { icon: GitHubIcon, label: 'GitHub', value: 'rakesh4407', href: personalInfo.github },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const inputClasses =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-200';

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Have an Interesting Idea? Let's Connect."
          subtitle="Contact"
        />

        <p className="text-center text-gray-400 mb-12 -mt-8 max-w-xl mx-auto">
          I'm always interested in connecting with people who are passionate about data,
          technology, and building meaningful solutions.
        </p>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        >
          {/* Left — Contact Info */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <GlassCard hover className="flex items-center gap-4 !p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                  </div>
                </GlassCard>
              </a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
            className="lg:col-span-3"
          >
            <GlassCard>
              {sent ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Message Composed!</h3>
                  <p className="text-gray-400 text-sm">
                    Your email client should open shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClasses}
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClasses}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClasses}
                  />
                  <textarea
                    placeholder="Your Message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-primary/25"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
