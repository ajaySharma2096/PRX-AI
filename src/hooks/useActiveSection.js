/**
 * useActiveSection.js
 *
 * Returns the ID of the section currently visible at the top of the viewport.
 *
 * Strategy: on every scroll event, walk the tracked sections in document order
 * and keep the ID of the last one whose top edge is at or above the activation
 * threshold. This approach is purely positional — it produces the same correct
 * result regardless of scroll direction (fixes the classic IntersectionObserver
 * "wrong item active when scrolling up" bug).
 *
 * @param {string[]} sectionIds   - Ordered list of section element IDs to track
 * @param {number}   [offset=90]  - Px from top of viewport at which a section
 *                                  is considered "active" (≥ header height)
 * @returns {string} activeId     - The currently active section ID
 */
import { useState, useEffect, useRef } from 'react';

export function useActiveSection(sectionIds, offset = 90) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  // Cache element refs so we don't re-query the DOM on every scroll tick
  const elementsRef = useRef([]);

  useEffect(() => {
    if (!sectionIds.length) return;

    // Resolve all section elements once after mount
    elementsRef.current = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    function update() {
      const els = elementsRef.current;
      if (!els.length) return;

      // Default: first section is active (handles page top)
      let current = els[0].id;

      for (const el of els) {
        if (el.getBoundingClientRect().top <= offset) {
          current = el.id;
        }
        // Once we hit a section whose top is clearly below the threshold,
        // no need to continue — sections are in document order.
      }

      setActiveId((prev) => (prev !== current ? current : prev));
    }

    // Run immediately to set the correct initial state (handles page reload
    // when scrolled partway down)
    update();

    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [sectionIds, offset]);

  return activeId;
}
