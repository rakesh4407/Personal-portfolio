import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Network, Database, Cpu, ArrowRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';

interface PipelineNode {
  title: string;
  role: string;
  tech: string;
  spec: string;
}

interface ArchitectureSystem {
  id: string;
  name: string;
  category: string;
  summary: string;
  icon: typeof Network;
  nodes: PipelineNode[];
  highlight: string;
}

const systems: ArchitectureSystem[] = [
  {
    id: 'churn',
    name: 'Customer Churn & Retention ML Engine',
    category: 'Machine Learning',
    summary: 'End-to-end predictive classification pipeline built on 7,000+ customer records to detect flight risk before cancellation.',
    icon: Cpu,
    highlight: 'Optimized Random Forest with balanced class weights to maximize recall on churning subscribers.',
    nodes: [
      {
        title: 'Data Ingestion',
        role: 'Data Sourcing & Loading',
        tech: 'Pandas / NumPy',
        spec: 'Ingests 7,043 telecom accounts with 21 customer attributes (tenure, contract, charges).',
      },
      {
        title: 'Feature Engineering',
        role: 'Preprocessing & Encoding',
        tech: 'Scikit-learn',
        spec: 'One-hot categorical encoding, missing value imputation, and stratified 80/20 train/test split.',
      },
      {
        title: 'Predictive Model',
        role: 'Ensemble Classification',
        tech: 'Random Forest (150 Trees)',
        spec: 'Trained with balanced class weighting; extracts Gini feature importance to isolate key churn drivers.',
      },
      {
        title: 'Inference & Delivery',
        role: 'REST API & Dashboard',
        tech: 'Flask & Web GUI',
        spec: 'Outputs real-time churn probability scores, alert triggers, and actionable retention suggestions.',
      },
    ],
  },
  {
    id: 'ssl',
    name: 'Automated TLS/SSL Monitoring System',
    category: 'Full Stack & Security',
    summary: 'Centralized enterprise infrastructure for automated TLS certificate expiry scanning and renewal tracking.',
    icon: ShieldCheck,
    highlight: 'Automated Python TLS scanner eliminates manual certificate audits and prevents service downtime.',
    nodes: [
      {
        title: 'Host Discovery',
        role: 'Target Identification',
        tech: 'Python CLI / Cron',
        spec: 'Parses enterprise domain lists and endpoints to schedule periodic non-blocking network sweeps.',
      },
      {
        title: 'TLS Inspection',
        role: 'Metadata Extraction',
        tech: 'Python SSL & Socket',
        spec: 'Establishes TLS handshake, downloads X.509 cert, and parses issuer, validity, and remaining days.',
      },
      {
        title: 'Central Store',
        role: 'Relational Persistence',
        tech: 'MySQL Database',
        spec: 'Maintains audit history, renewal status flags, risk tiers (Critical, Urgent, Reminder), and user roles.',
      },
      {
        title: 'Control Panel',
        role: 'Role-Based Dashboard',
        tech: 'PHP / Chart.js',
        spec: 'Provides real-time analytics views, bulk Excel import/export, and expiry notification workflows.',
      },
    ],
  },
  {
    id: 'sales',
    name: 'Regional Sales & Profitability Engine',
    category: 'Data Analytics & BI',
    summary: 'Multi-year financial intelligence pipeline uncovering sales volume versus profitability disparities across US regions.',
    icon: Layers,
    highlight: 'Revealed Export channel accounted for 15% volume but yielded peak profit margin of ~38%.',
    nodes: [
      {
        title: 'Raw Datasets',
        role: 'Historical Ingestion',
        tech: 'CSV / Excel Pipelines',
        spec: 'Four years of transactional data spanning four sales channels and multiple US geographical regions.',
      },
      {
        title: 'Data Cleaning',
        role: 'Validation & Transforms',
        tech: 'Pandas',
        spec: 'Reconciled currency mismatches, eliminated duplicates, and engineered profit margin ratios.',
      },
      {
        title: 'Statistical EDA',
        role: 'Pattern Discovery',
        tech: 'Matplotlib / Seaborn',
        spec: 'Discovered seasonal revenue spikes and highlighted variance between gross volume and net margin.',
      },
      {
        title: 'Executive BI',
        role: 'Stakeholder Reporting',
        tech: 'Power BI Dashboard',
        spec: 'Interactive dashboard with dynamic slice filters for regional executives to track budget variance.',
      },
    ],
  },
  {
    id: 'nlp',
    name: 'IPL Sentiment & Social Mining Pipeline',
    category: 'NLP & Opinion Mining',
    summary: 'Natural language processing pipeline analyzing real-time social opinion shifts correlated with cricket match milestones.',
    icon: Network,
    highlight: 'Correlated micro-sentiment shifts against real-time match events (wickets, boundaries, run rates).',
    nodes: [
      {
        title: 'Social Stream',
        role: 'Text Ingestion',
        tech: 'Social Text Feeds',
        spec: 'Streams unstructured match chatter, fan reactions, and tournament commentary in real time.',
      },
      {
        title: 'Text Cleaning',
        role: 'NLP Preprocessing',
        tech: 'Regex & Tokenizer',
        spec: 'Removes URLs, handles hashtags, removes stopwords, and performs lemmatization on commentary text.',
      },
      {
        title: 'Sentiment Engine',
        role: 'Polarity Scoring',
        tech: 'NLP Classification',
        spec: 'Computes positive, negative, and neutral polarity scores with confidence ratings per match session.',
      },
      {
        title: 'Analytics Timeline',
        role: 'Temporal Trends',
        tech: 'Matplotlib & Streamlit',
        spec: 'Visualizes sentiment curves aligned with game overs and pivotal match-winning moments.',
      },
    ],
  },
];

export default function ArchitectureVisualizer() {
  const [selectedId, setSelectedId] = useState<string>('churn');
  const [activeNodeIdx, setActiveNodeIdx] = useState<number>(0);

  const activeSystem = systems.find((s) => s.id === selectedId) || systems[0];

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="System Architectures."
          subtitle="// 01. ENGINEERING BLUEPRINTS & DATA FLOWS"
        />

        <p className="text-center text-gray-400 -mt-6 mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore the technical data pipelines and architectural blueprints behind my core projects.
        </p>

        {/* System Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {systems.map((sys) => {
            const isSelected = selectedId === sys.id;
            return (
              <button
                key={sys.id}
                type="button"
                onClick={() => {
                  setSelectedId(sys.id);
                  setActiveNodeIdx(0);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 border border-primary-light/50'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                <sys.icon size={15} />
                <span>{sys.name.split(' ')[0]} {sys.name.split(' ')[1]}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'}`}>
                  {sys.category.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Architectural Canvas */}
        <GlassCard className="p-6 sm:p-10 border border-primary/30 shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-primary-light mb-1">
                <span>SYSTEM_ID: {activeSystem.id.toUpperCase()}_PIPELINE_V1.0</span>
                <span>•</span>
                <span className="text-emerald-400">STATUS: VERIFIED</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">{activeSystem.name}</h3>
              <p className="text-sm text-gray-400 mt-1 max-w-2xl">{activeSystem.summary}</p>
            </div>
            <div className="bg-primary/10 border border-primary/20 rounded-xl px-4 py-3 shrink-0 text-left md:text-right">
              <span className="text-[10px] uppercase font-mono text-gray-400 block">Key Technical Milestone</span>
              <span className="text-xs font-medium text-primary-light">{activeSystem.highlight}</span>
            </div>
          </div>

          {/* Connected Pipeline Diagram (4 Steps) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {activeSystem.nodes.map((node, idx) => {
              const isActive = activeNodeIdx === idx;
              return (
                <div key={node.title} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveNodeIdx(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer h-full flex flex-col justify-between ${
                      isActive
                        ? 'bg-primary/15 border-primary shadow-lg shadow-primary/15'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5'
                    }`}
                  >
                    <div>
                      {/* Step Indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${isActive ? 'bg-primary text-white' : 'bg-white/5 text-gray-400'}`}>
                          PHASE 0{idx + 1}
                        </span>
                        {idx < 3 && (
                          <ArrowRight size={13} className="hidden lg:block text-gray-600" />
                        )}
                      </div>

                      <h4 className="font-heading font-semibold text-white text-base mb-1">{node.title}</h4>
                      <p className="text-xs text-primary-light font-medium mb-3">{node.role}</p>
                    </div>

                    <div className="pt-3 border-t border-white/5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-500 block mb-1">Technology</span>
                      <span className="text-xs font-mono text-gray-300 font-semibold">{node.tech}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Node Deep-Dive Drawer */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedId}-${activeNodeIdx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-8 p-5 rounded-xl bg-[#070b14] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 text-primary-light flex items-center justify-center shrink-0 mt-0.5">
                  <Database size={16} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-primary-light uppercase">
                      Deep Dive: Phase 0{activeNodeIdx + 1} — {activeSystem.nodes[activeNodeIdx].title}
                    </span>
                    <span className="text-[10px] font-mono bg-white/10 text-gray-400 px-1.5 py-0.2 rounded">
                      {activeSystem.nodes[activeNodeIdx].tech}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1 leading-relaxed">
                    {activeSystem.nodes[activeNodeIdx].spec}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono shrink-0 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 size={13} />
                <span>SPEC VERIFIED</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </section>
  );
}
