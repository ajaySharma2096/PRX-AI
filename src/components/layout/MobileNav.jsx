/**
 * MobileNav.jsx — Slide-down mobile navigation drawer.
 *
 * Receives state from Header (which owns useMobileMenu) so both the
 * hamburger button and the drawer share the same open/close state.
 *
 * Props:
 *   isOpen      {boolean}
 *   drawerRef   {React.RefObject}  — passed from useMobileMenu for click-outside
 *   activeId    {string}           — currently active section id
 *   onNavClick  {(e, target) => void}
 */
import { AnimatePresence, motion } from 'framer-motion';
import { header } from '@/data';
import { cn } from '@/utils';

export function MobileNav({ isOpen, drawerRef, activeId, onNavClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={drawerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y:  0 }}
          exit={{    opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          className={cn(
            'fixed top-16 inset-x-0 z-40 lg:hidden',
            'bg-[rgba(2,4,23,0.97)] backdrop-blur-xl',
            'border-b border-[var(--border)]',
            'shadow-2xl',
          )}
        >
          <nav className="container-xl py-4 flex flex-col gap-1">
            {header.nav.map((item, i) => (
              <motion.a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => onNavClick(e, item.target)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
                className={cn(
                  'flex items-center px-4 py-2.5 rounded-xl',
                  'text-sm font-medium select-none',
                  'transition-colors duration-150',
                  activeId === item.target
                    ? 'text-[var(--primary-light)] bg-[var(--primary-glow)]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]',
                )}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
