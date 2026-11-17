import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Target, Terminal, Copy, Check } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

const codeSnippets = [
  {
    filename: 'churn_model.py',
    tag: 'ML Pipeline',
    code: `# Telecom Customer Churn Pipeline (7,000+ Records)
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# Stratified split to preserve churn ratio
X_train, X_test, y_train, y_test = train_test_split(
    features, labels, test_size=0.2, random_state=42, stratify=labels
)

# Balanced random forest with feature-importance weighting
model = RandomForestClassifier(n_estimators=150, max_depth=10, class_weight='balanced')
model.fit(X_train, y_train)

# Predict churn risk probability for retention actions
churn_risk = model.predict_proba(active_subscribers)[:, 1]`,
  },
  {
    filename: 'sales_margin.py',
    tag: 'Data Analytics',
    code: `# US Regional Sales & Margin Discrepancy Analysis
import pandas as pd

df['profit_margin'] = (df['operating_profit'] / df['revenue']) * 100

channel_performance = df.groupby('channel').agg(
    total_rev=('revenue', 'sum'),
    avg_margin=('profit_margin', 'mean'),
    units=('quantity', 'sum')
).sort_values(by='avg_margin', ascending=False)

# Finding: Export channel drove highest profit margin (~38%)`,
  },
  {
    filename: 'tls_scanner.py',
    tag: 'Automation & Security',
    code: `# TLS Certificate Expiry & Risk Scoring Engine
import ssl, socket
from datetime import datetime

context = ssl.create_default_context()
with socket.create_connection((target_host, 443), timeout=5) as sock:
    with context.wrap_socket(sock, server_hostname=target_host) as ssock:
        cert = ssock.getpeercert()
        expires = datetime.strptime(cert['notAfter'], '%b %d %H:%M:%S %Y %Z')
        days_left = (expires - datetime.utcnow()).days
        # Triggers automated renewal workflow when days_left < 30`,
  },
];

export default function About() {
  const { ref, controls } = useScrollReveal();
  const [activeCodeTab, setActiveCodeTab] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

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

        {/* Interactive Code Preview Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 max-w-4xl mx-auto rounded-2xl glass-card overflow-hidden border border-white/10 shadow-2xl"
        >
          {/* Terminal Title Bar */}
          <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0b1120] border-b border-white/5 gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <Terminal size={13} className="text-primary-light" />
                <span>engineering_sample.py</span>
              </span>
            </div>

            {/* Code Tabs */}
            <div className="flex items-center gap-1">
              {codeSnippets.map((snippet, idx) => (
                <button
                  key={snippet.filename}
                  type="button"
                  onClick={() => setActiveCodeTab(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                    activeCodeTab === idx
                      ? 'bg-primary/20 text-primary-light border border-primary/30'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {snippet.filename}
                </button>
              ))}
              <button
                type="button"
                onClick={handleCopyCode}
                className="ml-2 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all text-xs"
                title="Copy code"
              >
                {copiedCode ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          {/* Terminal Code Display */}
          <div className="p-5 font-mono text-xs sm:text-sm text-gray-300 bg-[#090d16]/90 overflow-x-auto leading-relaxed">
            <pre className="text-gray-300">
              <code>{codeSnippets[activeCodeTab].code}</code>
            </pre>
          </div>

          <div className="px-4 py-2.5 bg-[#0b1120] border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
            <span>Focus: {codeSnippets[activeCodeTab].tag}</span>
            <span className="text-primary-light">Python 3.11 • Production Ready</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
