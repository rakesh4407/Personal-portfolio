import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode, MouseEvent } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  spotlight?: boolean;
}

export default function GlassCard({
  children,
  className = '',
  hover = false,
  spotlight = true,
}: GlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!spotlight || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const baseClasses =
    'relative overflow-hidden glass-card rounded-2xl p-6 transition-all duration-300';
  const hoverClasses = hover
    ? 'hover:bg-white/[0.08] hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10'
    : '';

  const spotlightOverlay = spotlight && isHovered && (
    <div
      className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
      style={{
        background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
      }}
    />
  );

  if (hover) {
    return (
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`${baseClasses} ${hoverClasses} ${className}`}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {spotlightOverlay}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${baseClasses} ${className}`}
    >
      {spotlightOverlay}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
