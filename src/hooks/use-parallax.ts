"use client";

/**
 * Hook to apply parallax effect to an element.
 * Uses GSAP ScrollTrigger for smooth scroll-linked movement.
 *
 * Behavior:
 * - Applies translateY based on scroll position
 * - Automatically disables on mobile
 * - Automatically disables when prefers-reduced-motion is enabled
 * - Respects explicit enabled flag
 * - Cleans up on unmount via gsap.context().revert()
 */

import { useEffect, type RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHasMounted } from "./use-has-mounted";
import { useReducedMotion } from "./use-reduced-motion";
import { useIsMobile } from "./use-is-mobile";

// Register plugin once on client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  /** Speed multiplier. 0.10 = subtle, 0.30 = noticeable */
  speed: number,
  /** Explicit enable/disable. Default true. */
  enabled: boolean = true
): void {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  useEffect(() => {
    const element = ref.current;

    // Bail early: no element, not mounted, disabled, reduced motion, or mobile
    if (!element || !hasMounted || !enabled || prefersReduced || isMobile) {
      return;
    }

    // Movement range based on viewport height and speed
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
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    // Cleanup: revert context kills all animations and ScrollTriggers
    return () => ctx.revert();
  }, [ref, speed, enabled, hasMounted, prefersReduced, isMobile]);
}
