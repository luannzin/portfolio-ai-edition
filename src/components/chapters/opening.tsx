"use client";

/**
 * Opening chapter — "What I Build"
 * First impression with orchestrated entrance animation.
 * Only chapter with motion in this milestone.
 */

import { motion } from "motion/react";
import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";
import { useHasMounted } from "@/hooks";
import { fadeRise } from "@/lib/motion-variants";

export function Opening() {
  const hasMounted = useHasMounted();

  return (
    <Chapter
      id="opening"
      bgSrc={CHAPTER_ASSETS.opening.bg}
      midSrc={CHAPTER_ASSETS.opening.mid}
      density="loose"
      className="flex items-center justify-center"
    >
      <div className="text-center max-w-3xl mx-auto">
        {/* Headline */}
        <motion.h1
          variants={fadeRise}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={0.4}
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-tight"
        >
          I build fast, reliable interfaces for products people depend on.
        </motion.h1>

        {/* Supporting line */}
        <motion.p
          variants={fadeRise}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={0.7}
          className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
        >
          Frontend engineer focused on performance, maintainability, and
          shipping real value—not just features.
        </motion.p>

        {/* Scroll cue */}
        <motion.p
          variants={fadeRise}
          initial={hasMounted ? "hidden" : false}
          animate={hasMounted ? "visible" : false}
          custom={1.0}
          className="mt-20 text-sm text-white/40"
        >
          See how I work
        </motion.p>
      </div>
    </Chapter>
  );
}
