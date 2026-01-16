/**
 * Approach chapter — "How I Think"
 * Three principles. Static in this milestone.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

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
    <Chapter
      id="approach"
      title="Approach"
      bgSrc={CHAPTER_ASSETS.approach.bg}
      density="loose"
    >
      <div className="space-y-16">
        {principles.map((principle) => (
          <article key={principle.title}>
            <h3 className="text-xl md:text-2xl font-medium text-white">
              {principle.title}
            </h3>
            <p className="mt-3 text-white/70">{principle.explanation}</p>
            <p className="mt-4 text-sm text-white/50 italic">
              {principle.example}
            </p>
          </article>
        ))}
      </div>
    </Chapter>
  );
}
