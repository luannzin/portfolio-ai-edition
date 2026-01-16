/**
 * Motion variants for Framer Motion.
 * Two patterns only: fadeRise (singles) and staggerCascade (container + item).
 * Reduced motion variants remove transforms, keeping opacity only.
 */

import type { Variants } from "motion/react";
import { TIMING, EASING, TRANSFORM } from "./constants";

/**
 * Fade Rise — for single elements.
 * Fades in while rising 16px.
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
 * Fade Rise (reduced motion) — opacity only.
 */
export const fadeRiseReduced: Variants = {
  hidden: { opacity: 0 },
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
 * Stagger container — orchestrates children.
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: TIMING.stagger,
    },
  },
};

/**
 * Stagger item — child of stagger container.
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
 * Stagger item (reduced motion) — opacity only.
 */
export const staggerItemReduced: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: TIMING.normal,
      ease: EASING.default,
    },
  },
};
