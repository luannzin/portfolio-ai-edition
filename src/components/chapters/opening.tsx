"use client";

/**
 * Opening chapter — "What I Build"
 * First impression. Orchestrated entrance on page load.
 * Only chapter that animates without scroll trigger.
 */

import { Chapter } from "@/components/layout";
import { FadeIn } from "@/components/motion";

export function Opening() {
  return (
    <Chapter id="opening" className="flex items-center justify-center">
      {/* Background layer placeholder — add when assets are ready */}
      {/* <BackgroundLayer src="/images/opening-bg.png" alt="" /> */}

      <div className="max-w-4xl px-6 text-center">
        {/* Focus statement — first to appear */}
        <FadeIn delay={0.6}>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight">
            I build fast, reliable interfaces for products people depend on.
          </h1>
        </FadeIn>

        {/* Supporting line — appears after headline */}
        <FadeIn delay={0.8}>
          <p className="mt-6 text-lg md:text-xl text-white/70">
            Frontend engineer focused on performance, maintainability, and
            shipping real value—not just features.
          </p>
        </FadeIn>

        {/* Scroll cue — appears last */}
        <FadeIn delay={1.2}>
          <p className="mt-16 text-sm text-white/40">See how I work</p>
        </FadeIn>
      </div>
    </Chapter>
  );
}
