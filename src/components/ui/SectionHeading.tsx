import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  children?: ReactNode;
}

export default function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  const { ref, controls } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-px w-8 bg-gradient-to-r from-primary to-accent" />
        <span className="text-sm font-medium tracking-[0.2em] uppercase text-primary-light">
          {subtitle}
        </span>
        <div className="h-px w-8 bg-gradient-to-r from-accent to-primary" />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
        {title}
      </h2>
    </motion.div>
  );
}
