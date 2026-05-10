/**
 * Header.jsx — Sticky top navigation bar.
 *
 * Features:
 *  • Transparent → frosted-glass background on scroll (> 20px)
 *  • Desktop nav links with active-section highlight via useActiveSection
 *  • Animated hamburger button (3-bar → X) on mobile
 *  • Logo click scrolls back to top
 *  • Smooth scroll to section on nav click (80px offset for header height)
 */
import { useState, useEffect } from 'react';
import { useActiveSection, useMobileMenu } from '@/hooks';
import { Badge } from '@/components/ui';
import { MobileNav } from './MobileNav';
import { header } from '@/data';
import { cn } from '@/utils';

// Section IDs in the same order as the nav so useActiveSection can watch them
const SECTION_IDS = header.nav.map((item) => item.target);

function smoothScrollTo(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const offset = 80; // header height + breathing room
  const y = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);
  const { isOpen, toggleRef, drawerRef, toggle } = useMobileMenu();

  // Header background: transparent → glass on scroll
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleNavClick(e, target) {
    e.preventDefault();
    smoothScrollTo(target);
  }

  function handleLogoClick(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50',
          'transition-all duration-300',
          scrolled
            ? 'bg-[rgba(2,4,23,0.88)] backdrop-blur-xl border-b border-[var(--border)] shadow-header'
            : 'bg-transparent',
        )}
      >
        <div className="w-full flex items-center justify-between h-16 lg:h-[68px] px-4 sm:px-6">

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="PRX — scroll to top"
          >
            <span className={cn(
              'flex items-center justify-center w-8 h-8 rounded-lg',
              'bg-[var(--primary-glow)] text-[var(--primary-light)] text-lg',
              'transition-transform duration-300 group-hover:scale-110',
            )}>
              {header.logo.icon}
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
                {header.logo.text}
              </span>
              <span className="text-[0.62rem] text-[var(--text-muted)] tracking-wide hidden sm:block">
                {header.logo.sub}
              </span>
            </div>
          </a>

          {/* ── Desktop nav ── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {header.nav.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => handleNavClick(e, item.target)}
                className={cn(
                  'px-3 py-1.5 rounded-lg',
                  'text-[0.8rem] font-medium',
                  'transition-colors duration-150',
                  activeId === item.target
                    ? 'text-[var(--primary-light)] bg-[var(--primary-glow)]'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)]',
                )}
              >
                {item.label}
              </a>
            ))}
          </nav> 

          {/* ── Hamburger (mobile only) ── */}
          <button
            ref={toggleRef}
            onClick={toggle}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 gap-1.5 shrink-0"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <span className={cn('block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300 origin-center', isOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300', isOpen && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-[var(--text-primary)] transition-all duration-300 origin-center', isOpen && '-rotate-45 -translate-y-2')} />
          </button>         

        </div>
      </header>

      {/* Mobile drawer — rendered outside header so it can slide below it */}
      <MobileNav
        isOpen={isOpen}
        drawerRef={drawerRef}
        activeId={activeId}
        onNavClick={handleNavClick}
      />
    </>
  );
}
