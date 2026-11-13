import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', hover = false }: GlassCardProps) {
  const baseClasses =
    'glass-card rounded-2xl p-6 transition-all duration-300';
  const hoverClasses = hover
    ? 'hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary/5'
    : '';

  if (hover) {
    return (
      <motion.div
        className={`${baseClasses} ${hoverClasses} ${className}`}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
}
