"use client";

/**
 * Contact chapter — "Get in Touch"
 * Minimal closing with email CTA.
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Chapter } from "@/components/layout";
import { useHasMounted, useReducedMotion } from "@/hooks";
import { fadeRise, fadeRiseReduced } from "@/lib/motion-variants";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "luandaniel966@gmail.com";

  const hasMounted = useHasMounted();
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced ? fadeRiseReduced : fadeRise;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Chapter
      id="contact"
      className="flex items-center justify-center py-32"
      minHeight="min-h-[70vh]"
    >
      <motion.div
        variants={variants}
        initial={hasMounted ? "hidden" : false}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-xl px-6 text-center"
      >
        <p className="text-white/70 mb-8">
          I'm open to senior frontend roles at product-driven teams.
        </p>

        <button
          onClick={handleCopy}
          className="text-2xl md:text-3xl font-medium text-white hover:text-white/80 transition-colors underline underline-offset-8 decoration-white/30 hover:decoration-white/60"
        >
          {copied ? "Copied" : "Email me"}
        </button>

        <div className="mt-12 flex justify-center gap-8">
          <a
            href="https://linkedin.com/in/luannzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/luannzin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="mt-16 text-xs text-white/30">
          Based in Brazil (UTC-3). I typically respond within 24 hours.
        </p>
      </motion.div>
    </Chapter>
  );
}
