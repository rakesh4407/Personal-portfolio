import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './ui/SocialIcons';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { personalInfo, formspreeEndpoint } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const { ref, controls } = useScrollReveal();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (form.name.trim().length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email address';
    if (form.subject.trim().length < 3) newErrors.subject = 'Subject must be at least 3 characters';
    if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // If Formspree is configured, send directly
    if (formspreeEndpoint) {
      setStatus('submitting');
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
          }),
        });
        if (res.ok) {
          setStatus('success');
          setForm({ name: '', email: '', subject: '', message: '' });
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      setTimeout(() => setStatus('idle'), 6000);
      return;
    }

    // Fallback: open mailto
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `From: ${form.name} (${form.email})\n\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus('success');
    setTimeout(() => setStatus('idle'), 6000);
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      const next = { ...errors };
      delete next[field];
      setErrors(next);
    }
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'rakesh-bca', href: personalInfo.linkedin },
    { icon: GitHubIcon, label: 'GitHub', value: 'rakesh4407', href: personalInfo.github },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#' },
  ];

  const inputClasses = (field: string) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-gray-500 outline-none transition-all duration-200 ${
      errors[field]
        ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500'
        : 'border-white/10 focus:border-primary focus:ring-1 focus:ring-primary'
    }`;

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
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-gray-200 font-medium truncate">{item.value}</p>
                  </div>
                  {item.href.startsWith('http') && (
                    <ExternalLink size={14} className="text-gray-600 shrink-0 ml-auto" />
                  )}
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
              {status === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle2 size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {formspreeEndpoint ? 'Message Sent!' : 'Email Client Opened!'}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {formspreeEndpoint
                      ? 'Thank you for reaching out. I\'ll get back to you soon.'
                      : 'Your default email app should have opened with the message pre-filled. Please send it from there.'}
                  </p>
                </div>
              ) : status === 'error' ? (
                <div className="text-center py-8">
                  <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Something Went Wrong</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Please try again or email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-primary-light hover:underline">
                      {personalInfo.email}
                    </a>
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={form.name}
                        onChange={(e) => { setForm({ ...form, name: e.target.value }); clearError('name'); }}
                        className={inputClasses('name')}
                        aria-label="Your name"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={form.email}
                        onChange={(e) => { setForm({ ...form, email: e.target.value }); clearError('email'); }}
                        className={inputClasses('email')}
                        aria-label="Your email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={form.subject}
                      onChange={(e) => { setForm({ ...form, subject: e.target.value }); clearError('subject'); }}
                      className={inputClasses('subject')}
                      aria-label="Subject"
                    />
                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => { setForm({ ...form, message: e.target.value }); clearError('message'); }}
                      className={`${inputClasses('message')} resize-none`}
                      aria-label="Your message"
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-primary/25"
                  >
                    <Send size={16} />
                    {status === 'submitting' ? 'Sending...' : formspreeEndpoint ? 'Send Message' : 'Compose Email'}
                  </button>
                  {!formspreeEndpoint && (
                    <p className="text-xs text-gray-600 text-center">
                      This will open your email client with the message pre-filled.
                    </p>
                  )}
                </form>
              )}
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
