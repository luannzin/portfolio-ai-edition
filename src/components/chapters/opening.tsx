"use client";

/**
 * Opening chapter — "What I Build"
 * First impression. Orchestrated entrance on page load.
 */

import { motion } from "motion/react";
import { Chapter } from "@/components/layout";
import { useHasMounted, useReducedMotion } from "@/hooks";
import { fadeRise, fadeRiseReduced } from "@/lib/motion-variants";

export function Opening() {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;

  return (
    <Chapter id="opening" className="flex items-center justify-center">
      <div className="max-w-4xl px-6 text-center">
        {/* Focus statement — first to appear */}
        <motion.h1
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={0.6}
          className="text-4xl md:text-6xl font-medium text-white tracking-tight"
        >
          I build fast, reliable interfaces for products people depend on.
        </motion.h1>

        {/* Supporting line — appears after headline */}
        <motion.p
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={0.8}
          className="mt-6 text-lg md:text-xl text-white/70"
        >
          Frontend engineer focused on performance, maintainability, and
          shipping real value—not just features.
        </motion.p>

        {/* Scroll cue — appears last */}
        <motion.p
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={1.2}
          className="mt-16 text-sm text-white/40"
        >
          See how I work
        </motion.p>
      </div>
    </Chapter>
  );
}
