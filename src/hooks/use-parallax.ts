"use client";

/**
 * Hook to apply parallax effect to an element.
 * Uses GSAP ScrollTrigger for smooth scroll-linked movement.
 *
 * Behavior:
 * - Applies translateY based on scroll position
 * - Automatically disables on mobile (performance)
 * - Automatically disables when prefers-reduced-motion is enabled
 * - Cleans up on unmount
 *
 * Usage:
 *   const ref = useRef<HTMLDivElement>(null);
 *   useParallax(ref, 0.1); // moves at 10% of scroll speed
 */

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "./use-reduced-motion";
import { useIsMobile } from "./use-is-mobile";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  /** Speed multiplier. 0.1 = moves 1px per 10px scrolled */
  speed: number
): void {
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;

    // Bail early if no element or motion should be disabled
    if (!element || prefersReduced || isMobile) {
      return;
    }

    // Calculate movement range based on viewport height
    // Element moves from -offset to +offset as it scrolls through viewport
    const offset = window.innerHeight * speed;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { y: -offset },
        {
          y: offset,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom", // animation starts when top of element hits bottom of viewport
            end: "bottom top", // animation ends when bottom of element hits top of viewport
            scrub: true, // ties animation progress to scroll position
          },
        }
      );
    });

    // Cleanup on unmount or when dependencies change
    return () => ctx.revert();
  }, [ref, speed, prefersReduced, isMobile]);
}
