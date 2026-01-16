"use client";

/**
 * FadeIn component.
 * Wraps content with Fade Rise entrance animation.
 * Uses viewport detection to trigger animation when element scrolls into view.
 */

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks";
import { fadeRise, fadeRiseReduced } from "@/lib/motion-variants";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay before animation starts (in seconds) */
  delay?: number;
  /** Element type to render. Default: div */
  as?: keyof typeof motion;
  /** Additional className */
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  as = "div",
  className,
}: FadeInProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={delay}
      className={className}
    >
      {children}
    </Component>
  );
}
