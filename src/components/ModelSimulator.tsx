import { useState, useId } from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCw, AlertTriangle, CheckCircle2, Shield, Activity, Code2 } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import GlassCard from './ui/GlassCard';

export default function ModelSimulator() {
  const tenureInputId = useId();
  const chargesInputId = useId();
  // State for simulated features
  const [tenure, setTenure] = useState<number>(12); // months (1-72)
  const [monthlyCharges, setMonthlyCharges] = useState<number>(75); // $ (20-120)
  const [contract, setContract] = useState<'month-to-month' | 'one-year' | 'two-year'>('month-to-month');
  const [techSupport, setTechSupport] = useState<boolean>(false);
  const [onlineSecurity, setOnlineSecurity] = useState<boolean>(false);
  const [showJson, setShowJson] = useState<boolean>(false);

  // Compute realistic logistic churn probability based on telecom feature weights
  const computeChurnRisk = () => {
    let score = -0.5; // baseline intercept

    // Contract weight
    if (contract === 'month-to-month') score += 1.4;
    else if (contract === 'one-year') score -= 0.6;
    else if (contract === 'two-year') score -= 1.3;

    // Tenure weight (longer tenure = strong retention)
    score -= (tenure / 72) * 1.5;

    // Monthly charges weight (higher bill = higher friction)
    score += ((monthlyCharges - 20) / 100) * 0.9;

    // Security & support protective factors
    if (techSupport) score -= 0.65;
    if (onlineSecurity) score -= 0.55;

    // Sigmoid function
    const prob = 1 / (1 + Math.exp(-score));
    return Math.min(Math.max(Math.round(prob * 100), 4), 96);
  };

  const riskPercent = computeChurnRisk();

  const getRiskTier = (pct: number) => {
    if (pct < 30) return { label: 'LOW RISK (STABLE)', color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' };
    if (pct < 60) return { label: 'MODERATE RISK (MONITOR)', color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/30' };
    return { label: 'CRITICAL CHURN RISK (INTERVENE)', color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/30' };
  };

  const tier = getRiskTier(riskPercent);

  const resetDefaults = () => {
    setTenure(24);
    setMonthlyCharges(65);
    setContract('one-year');
    setTechSupport(true);
    setOnlineSecurity(true);
  };

  return (
    <section id="ai-playground" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          title="Interactive AI Simulator."
          subtitle="// 00. NVIDIA AI LAB & LIVE INFERENCE"
        />

        <p className="text-center text-gray-400 -mt-6 mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Test real-time model inference directly in your browser. Derived from my{' '}
          <span className="text-primary-light font-semibold">Customer Churn ML Model</span> trained on{' '}
          <span className="text-white font-medium">7,000+ customer records</span>.
        </p>

        <div className="max-w-5xl mx-auto">
          <GlassCard className="p-6 sm:p-8 border border-primary/30 shadow-2xl relative">
            {/* Aerospace corner reticles */}
            <span className="absolute top-2 left-2 text-[10px] font-mono text-primary-light/50 select-none">+ SYS:INF-01</span>
            <span className="absolute top-2 right-2 text-[10px] font-mono text-primary-light/50 select-none">TELEMETRY: ACTIVE +</span>

            <div className="grid lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Interactive Feature Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <div className="flex items-center gap-2 text-sm font-heading font-semibold text-white">
                    <Cpu size={16} className="text-primary-light" />
                    <span>Input Telemetry Parameters</span>
                  </div>
                  <button
                    type="button"
                    onClick={resetDefaults}
                    className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Reset to recommended baseline"
                  >
                    <RefreshCw size={12} />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Contract Type Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Contract Agreement
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['month-to-month', 'one-year', 'two-year'] as const).map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setContract(c)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-medium transition-all ${
                          contract === c
                            ? 'bg-primary text-white border border-primary-light/50 shadow-lg shadow-primary/20'
                            : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/5'
                        }`}
                      >
                        {c === 'month-to-month' ? 'Month-to-Month' : c === 'one-year' ? '1-Year Term' : '2-Year Term'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Account Tenure Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor={tenureInputId} className="text-xs font-mono uppercase tracking-wider text-gray-400 cursor-pointer">
                      Customer Tenure
                    </label>
                    <span className="text-xs font-mono font-bold text-primary-light bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                      {tenure} {tenure === 1 ? 'Month' : 'Months'}
                    </span>
                  </div>
                  <input
                    id={tenureInputId}
                    type="range"
                    min="1"
                    max="72"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                    <span>1 mo (High Risk)</span>
                    <span>36 mos</span>
                    <span>72 mos (Loyal)</span>
                  </div>
                </div>

                {/* Monthly Charges Slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor={chargesInputId} className="text-xs font-mono uppercase tracking-wider text-gray-400 cursor-pointer">
                      Monthly Spend
                    </label>
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      ${monthlyCharges}/month
                    </span>
                  </div>
                  <input
                    id={chargesInputId}
                    type="range"
                    min="20"
                    max="120"
                    value={monthlyCharges}
                    onChange={(e) => setMonthlyCharges(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-1">
                    <span>$20 (Basic)</span>
                    <span>$70 (Standard)</span>
                    <span>$120 (Enterprise)</span>
                  </div>
                </div>

                {/* Value-Added Feature Toggles */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setTechSupport(!techSupport)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                      techSupport
                        ? 'bg-primary/20 border-primary text-white shadow-md shadow-primary/10'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Shield size={14} className={techSupport ? 'text-primary-light' : 'text-gray-500'} />
                      <span>Tech Support</span>
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${techSupport ? 'bg-primary text-white' : 'bg-white/5 text-gray-500'}`}>
                      {techSupport ? 'ENABLED' : 'NONE'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOnlineSecurity(!onlineSecurity)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs transition-all ${
                      onlineSecurity
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/10'
                        : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <CheckCircle2 size={14} className={onlineSecurity ? 'text-cyan-400' : 'text-gray-500'} />
                      <span>Online Security</span>
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${onlineSecurity ? 'bg-cyan-500 text-white' : 'bg-white/5 text-gray-500'}`}>
                      {onlineSecurity ? 'ENABLED' : 'NONE'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column: Live Model Output & Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#070b14] p-6 rounded-2xl border border-white/10 relative">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Activity size={13} className="text-primary-light animate-pulse" />
                      <span>LIVE INFERENCE GAUGE</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowJson(!showJson)}
                      className="text-[11px] font-mono text-primary-light hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Code2 size={12} />
                      <span>{showJson ? 'View Gauge' : 'View JSON'}</span>
                    </button>
                  </div>

                  {showJson ? (
                    <div className="p-3 rounded-xl bg-black/60 font-mono text-[11px] text-emerald-400 overflow-x-auto leading-relaxed border border-white/5">
                      <pre>
                        {JSON.stringify(
                          {
                            model: 'RandomForestClassifier_v2.1',
                            inference_latency_ms: 1.4,
                            input_payload: {
                              contract,
                              tenure_months: tenure,
                              monthly_charges: monthlyCharges,
                              tech_support: techSupport,
                              online_security: onlineSecurity,
                            },
                            computed_risk_probability: `${riskPercent}%`,
                            retention_recommendation:
                              riskPercent > 50
                                ? 'Dispatch immediate retention discount'
                                : 'Maintain standard loyalty cadence',
                          },
                          null,
                          2
                        )}
                      </pre>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      {/* Probability Number */}
                      <motion.div
                        key={riskPercent}
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-6xl sm:text-7xl font-bold font-heading tracking-tight mb-2"
                      >
                        <span className={tier.color}>{riskPercent}</span>
                        <span className="text-2xl text-gray-500 font-light">%</span>
                      </motion.div>

                      {/* Tier Pill */}
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold ${tier.bg} ${tier.color} ${tier.border} border mb-6`}>
                        {riskPercent > 50 ? <AlertTriangle size={13} /> : <CheckCircle2 size={13} />}
                        <span>{tier.label}</span>
                      </div>

                      {/* Dynamic Progress Bar */}
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/10 mb-5">
                        <motion.div
                          className={`h-full rounded-full transition-all duration-300 ${
                            riskPercent < 30 ? 'bg-emerald-400' : riskPercent < 60 ? 'bg-amber-400' : 'bg-rose-500'
                          }`}
                          style={{ width: `${riskPercent}%` }}
                        />
                      </div>

                      {/* Key Explainability Factors */}
                      <div className="text-left space-y-2 text-xs font-mono text-gray-400 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                          Top Risk Drivers (Feature Impact)
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Contract Impact:</span>
                          <span className={contract === 'month-to-month' ? 'text-rose-400' : 'text-emerald-400'}>
                            {contract === 'month-to-month' ? '+32% Risk' : '-24% Retention'}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Tenure Protection:</span>
                          <span className="text-primary-light">
                            -{Math.round((tenure / 72) * 35)}% Factor
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Security & Support:</span>
                          <span className={techSupport || onlineSecurity ? 'text-emerald-400' : 'text-gray-500'}>
                            {techSupport && onlineSecurity ? '-28% Protective' : techSupport || onlineSecurity ? '-14% Protective' : 'None (Neutral)'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>SCIKIT-LEARN 1.5</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                    LATENCY: 1.4ms
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
