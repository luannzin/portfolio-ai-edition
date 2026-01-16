"use client";

/**
 * Approach chapter — "How I Think"
 * Three principles with staggered reveal on scroll.
 */

import { motion } from "motion/react";
import { Chapter } from "@/components/layout";
import { useHasMounted, useReducedMotion } from "@/hooks";
import {
  fadeRise,
  fadeRiseReduced,
  staggerContainer,
  staggerItem,
  staggerItemReduced,
} from "@/lib/motion-variants";

const principles = [
  {
    title: "Start with constraints",
    explanation: "I identify what cannot change first—then build around it.",
    example:
      "When migrating legacy React 16 to a modern stack, I preserved API contracts to avoid breaking production during the switch.",
  },
  {
    title: "Measure before optimizing",
    explanation:
      "I don't guess at performance problems. I profile, then decide.",
    example:
      "Build times were slow. Profiling showed redundant transpilation. I removed it and cut build time by 60–70%.",
  },
  {
    title: "Ship, then refine",
    explanation:
      "I prefer working software over planning cycles. I iterate fast and fix real bugs.",
    example:
      "The sales site launched in weeks, not months. Post-launch, I tuned SEO and UX based on actual traffic data.",
  },
];

export function Approach() {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;
  const itemVariants = prefersReduced ? staggerItemReduced : staggerItem;

  return (
    <Chapter id="approach" className="flex items-center justify-center py-32">
      <div className="max-w-3xl px-6">
        <motion.h2
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-white mb-16"
        >
          Approach
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-16"
        >
          {principles.map((principle) => (
            <motion.article key={principle.title} variants={itemVariants}>
              <h3 className="text-xl md:text-2xl font-medium text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-white/70">{principle.explanation}</p>
              <p className="mt-4 text-sm text-white/50 italic">
                {principle.example}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Chapter>
  );
}
