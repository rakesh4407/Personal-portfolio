import { Activity, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface TelemetryHUDProps {
  onOpenCommandPalette: () => void;
}

export default function TelemetryHUD({ onOpenCommandPalette }: TelemetryHUDProps) {
  return (
    <div className="w-full bg-[#050811]/90 border-b border-primary/20 backdrop-blur-md text-[11px] font-mono text-gray-400 py-1.5 px-4 sm:px-6 z-40 select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1 gap-x-4">
        {/* Left Telemetry */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-emerald-400 font-semibold tracking-wider">SYSTEM: ONLINE</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 text-gray-400">
            <Cpu size={12} className="text-primary-light" />
            <span>AI & DS COHORT</span>
            <span className="text-gray-600">•</span>
            <span className="text-primary-light font-semibold">9.22 CGPA</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-gray-500">
            <Activity size={12} className="text-cyan-400" />
            <span>LAT: 13.0827°N, 80.2707°E [CHENNAI]</span>
          </div>
        </div>

        {/* Right Telemetry & Command Trigger */}
        <div className="flex items-center gap-3 ml-auto">
          <div className="hidden md:flex items-center gap-1 text-gray-500">
            <ShieldCheck size={12} className="text-emerald-400" />
            <span>INFERENCE ENGINE: READY</span>
          </div>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            className="group flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10 hover:border-primary/40 bg-white/5 hover:bg-primary/10 text-gray-300 hover:text-white transition-all cursor-pointer"
            title="Open Command Palette"
          >
            <Terminal size={11} className="text-primary-light group-hover:rotate-12 transition-transform" />
            <span className="text-[10px] tracking-wide">COMMAND PALETTE</span>
            <kbd className="hidden sm:inline-block px-1 py-0.2 text-[9px] bg-black/40 rounded border border-white/10 text-gray-400">
              ⌘K
            </kbd>
          </button>
        </div>
      </div>
    </div>
  );
}
