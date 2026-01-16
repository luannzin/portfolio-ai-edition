"use client";

/**
 * Selected Work chapter — Projects Index
 * Project cards with staggered reveal.
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

const projects = [
  {
    name: "Loopvet Sales Site",
    summary: "Rebuilt the company's public site for speed, SEO, and conversions.",
    role: "Lead frontend developer",
    metric: ">200% increase in lead capture after launch.",
    link: "#",
  },
  {
    name: "Loopvet Core App Migration",
    summary: "Migrated main product from React 16 + Vite to modern stack.",
    role: "Frontend developer",
    metric: "60–70% reduction in build time.",
    link: null,
  },
  {
    name: "PDF Microservice",
    summary: "Built a backend service for automated PDF generation.",
    role: "Fullstack contributor",
    metric: null,
    link: null,
  },
];

export function SelectedWork() {
  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;
  const itemVariants = prefersReduced ? staggerItemReduced : staggerItem;

  return (
    <Chapter
      id="selected-work"
      className="flex items-center justify-center py-32"
    >
      <div className="max-w-4xl px-6 w-full">
        <motion.h2
          variants={variants}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-2xl md:text-3xl font-medium text-white mb-16"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial={hasMounted ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.name}
              variants={itemVariants}
              className="p-6 bg-white/5 rounded-lg"
            >
              <h3 className="text-lg font-medium text-white">{project.name}</h3>
              <p className="mt-2 text-sm text-white/70">{project.summary}</p>
              <p className="mt-3 text-xs text-white/50">{project.role}</p>
              {project.metric && (
                <p className="mt-4 text-sm text-white/90 font-medium">
                  {project.metric}
                </p>
              )}
              {project.link && (
                <a
                  href={project.link}
                  className="mt-4 inline-block text-sm text-white/60 underline underline-offset-4 hover:text-white transition-colors"
                >
                  View live
                </a>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Chapter>
  );
}
