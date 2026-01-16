"use client";

/**
 * StaggerList component.
 * Wraps a list of items with staggered Fade Rise animation.
 * Each child animates in sequence with a small delay.
 */

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks";
import {
  staggerContainer,
  staggerItem,
  staggerItemReduced,
} from "@/lib/motion-variants";

interface StaggerListProps {
  children: React.ReactNode;
  /** Additional className for the container */
  className?: string;
}

export function StaggerList({ children, className }: StaggerListProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? staggerItemReduced : staggerItem;

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
}
