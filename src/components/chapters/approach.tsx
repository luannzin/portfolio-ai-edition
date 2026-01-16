"use client";

/**
 * Approach chapter — "How I Think"
 * Three principles with staggered reveal on scroll.
 */

import { Chapter } from "@/components/layout";
import { FadeIn, StaggerList, StaggerItem } from "@/components/motion";

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
  return (
    <Chapter id="approach" className="flex items-center justify-center py-32">
      <div className="max-w-3xl px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-16">
            Approach
          </h2>
        </FadeIn>

        <StaggerList className="space-y-16">
          {principles.map((principle) => (
            <StaggerItem key={principle.title}>
              <article>
                <h3 className="text-xl md:text-2xl font-medium text-white">
                  {principle.title}
                </h3>
                <p className="mt-3 text-white/70">{principle.explanation}</p>
                <p className="mt-4 text-sm text-white/50 italic">
                  {principle.example}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </Chapter>
  );
}
