/**
 * useMobileMenu.js
 *
 * Manages the open/closed state of the mobile navigation drawer.
 * Handles three auto-close triggers:
 *   1. Click outside the drawer and toggle button
 *   2. Escape key
 *   3. Any nav link click (navigation intent = close drawer)
 *
 * Also locks body scroll when the drawer is open to prevent the
 * background page from scrolling behind the overlay.
 *
 * @returns {{
 *   isOpen:      boolean,
 *   toggleRef:   React.RefObject,  — attach to the hamburger <button>
 *   drawerRef:   React.RefObject,  — attach to the drawer <nav>/<ul>
 *   open:        () => void,
 *   close:       () => void,
 *   toggle:      () => void,
 * }}
 */
import { useState, useEffect, useRef, useCallback } from 'react';

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const drawerRef = useRef(null);

  const open   = useCallback(() => setIsOpen(true),  []);
  const close  = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((s) => !s), []);

  // Lock / unlock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Click-outside handler
  useEffect(() => {
    if (!isOpen) return;

    function handleClick(e) {
      const insideDrawer = drawerRef.current?.contains(e.target);
      const insideToggle = toggleRef.current?.contains(e.target);
      if (!insideDrawer && !insideToggle) close();
    }

    // Small delay so the toggle click that opened the menu doesn't
    // immediately trigger a close via document click
    const timer = setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 10);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleClick);
    };
  }, [isOpen, close]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        close();
        // Return focus to the toggle button so keyboard users aren't lost
        toggleRef.current?.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  // Close on any anchor click inside the drawer
  useEffect(() => {
    const drawer = drawerRef.current;
    if (!drawer) return;

    function handleNavClick(e) {
      if (e.target.closest('a')) close();
    }

    drawer.addEventListener('click', handleNavClick);
    return () => drawer.removeEventListener('click', handleNavClick);
  }, [close]);

  return { isOpen, toggleRef, drawerRef, open, close, toggle };
}
