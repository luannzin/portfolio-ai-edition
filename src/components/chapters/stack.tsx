"use client";

/**
 * Stack chapter — "The System"
 * Technology groups with staggered reveal.
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

const stackGroups = [
  {
    name: "Core",
    tools: "TypeScript, React, Next.js",
    reason:
      "Type safety and component architecture keep large codebases maintainable.",
  },
  {
    name: "Styling",
    tools: "Tailwind CSS, CSS3",
    reason:
      "Utility-first CSS accelerates iteration without sacrificing design control.",
  },
  {
    name: "Build & Tooling",
    tools: "Vite, Bun, Biome",
    reason:
      "Fast builds mean faster feedback loops and less context-switching.",
  },
  {
    name: "Backend (Support)",
    tools: "Node.js, AdonisJS, REST APIs",
    reason: "I can read and contribute to the API layer when frontend needs it.",
  },
  {
    name: "AI Tooling",
    tools: "Cursor, Claude, GPT-4",
    reason:
      "AI accelerates boilerplate, debugging, and edge case analysis—not decision-making.",
  },
];

export function Stack() {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;
  const itemVariants = prefersReduced ? staggerItemReduced : staggerItem;

  return (
    <Chapter id="stack" className="flex items-center justify-center py-32">
      <div className="max-w-3xl px-6">
        <motion.h2
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-white mb-16"
        >
          Stack
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {stackGroups.map((group) => (
            <motion.article key={group.name} variants={itemVariants}>
              <h3 className="text-lg font-medium text-white">{group.name}</h3>
              <p className="mt-1 text-white/50 text-sm">{group.tools}</p>
              <p className="mt-2 text-white/70">{group.reason}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-sm text-white/40 italic"
        >
          I avoid heavy abstractions that promise flexibility but add
          indirection. I prefer boring, readable code.
        </motion.p>
      </div>
    </Chapter>
  );
}
