/**
 * RevealWrapper.jsx
 *
 * Framer Motion fade-up wrapper. Wraps any child and animates it into view
 * the first time it enters the viewport.
 *
 * Props:
 *   delay   {number}  — seconds before animation starts (for stagger groups)
 *   y       {number}  — vertical travel distance in px (default 22)
 *   className {string}
 *   as      {string}  — rendered HTML tag (default 'div')
 *
 * Usage:
 *   <RevealWrapper delay={index * 0.07}>
 *     <FeatureCard ... />
 *   </RevealWrapper>
 */
import { motion } from 'framer-motion';
import { cn } from '@/utils';

const EASE = [0.4, 0, 0.2, 1];

export function RevealWrapper({
  children,
  delay     = 0,
  y         = 22,
  duration  = 0.48,
  className,
  as        = 'div',
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: EASE }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {children}
    </MotionTag>
  );
}
