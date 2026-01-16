"use client";

/**
 * Hook to detect prefers-reduced-motion preference.
 * Returns true if user prefers reduced motion.
 * Used to disable parallax and convert animations to opacity-only.
 */

import { useState, useEffect } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

export function useReducedMotion(): boolean {
  // Default to true (reduced motion) on server to be safe
  const [prefersReduced, setPrefersReduced] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    // Set initial value on client
    setPrefersReduced(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
