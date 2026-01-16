/**
 * Motion timing constants.
 * Centralized to ensure consistency across all animations.
 * Values derived from motion design system — do not change without reviewing motion_system.md.
 */

export const TIMING = {
  /** Micro-interactions: hover, focus, toast */
  fast: 0.15,
  /** Entrance reveals, opacity transitions */
  normal: 0.4,
  /** Background parallax, ambient movement */
  slow: 0.8,
  /** Delay between staggered items */
  stagger: 0.06,
} as const;

/**
 * Easing curves.
 * Primary uses ease-out for "fast start, gentle land" feel.
 */
export const EASING = {
  /** Standard ease-out for most animations */
  default: [0.16, 1, 0.3, 1] as const,
  /** Linear for parallax (no acceleration) */
  linear: [0, 0, 1, 1] as const,
} as const;

/**
 * Breakpoints for responsive behavior.
 * Values match Tailwind defaults.
 */
export const BREAKPOINTS = {
  /** Below this, mid-layer is removed */
  mobile: 768,
} as const;

/**
 * Parallax intensity multipliers.
 * How much each layer moves relative to scroll.
 */
export const PARALLAX = {
  /** Background moves very slowly — barely perceptible */
  background: 0.1,
  /** Mid-layer moves slightly faster for depth */
  mid: 0.3,
} as const;

/**
 * Transform constraints.
 * Maximum values to keep motion subtle.
 */
export const TRANSFORM = {
  /** Max Y translation for entrances (in pixels) */
  maxTranslateY: 16,
  /** Max Y translation for hover states (in pixels) */
  maxHoverY: 4,
} as const;
