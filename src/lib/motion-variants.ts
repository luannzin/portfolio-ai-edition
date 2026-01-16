/**
 * Motion variants for Framer Motion.
 * Two patterns only: Fade Rise (singles) and Stagger Cascade (groups).
 * All variants automatically respect prefers-reduced-motion via the hook.
 */

import type { Variants } from "motion/react";
import { TIMING, EASING, TRANSFORM } from "./constants";

/**
 * Fade Rise — for single elements.
 * Fades in while rising 16px. Used for headings, hero text, standalone blocks.
 */
export const fadeRise: Variants = {
  hidden: {
    opacity: 0,
    y: TRANSFORM.maxTranslateY,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.default,
      delay,
    },
  }),
};

/**
 * Fade Rise (reduced motion) — opacity only, no transform.
 * Used when prefers-reduced-motion is enabled.
 */
export const fadeRiseReduced: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.default,
      delay,
    },
  }),
};

/**
 * Stagger Cascade container — for groups of items.
 * The container triggers children to animate in sequence.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TIMING.stagger,
      delayChildren: 0,
    },
  },
};

/**
 * Stagger Cascade item — each child in a staggered group.
 * Uses Fade Rise motion but timing is controlled by parent.
 */
export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: TRANSFORM.maxTranslateY,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: TIMING.normal,
      ease: EASING.default,
    },
  },
};

/**
 * Stagger Cascade item (reduced motion) — opacity only.
 */
export const staggerItemReduced: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.default,
    },
  },
};
