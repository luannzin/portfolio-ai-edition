/**
 * Case Study chapter — Loopvet Sales Site
 * Long-form content blocks. Static in this milestone.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

const decisions = [
  {
    title: "Static-first with Next.js SSG",
    context:
      "The site content rarely changed, but page speed was critical for SEO. SSG limits dynamic personalization, but eliminates cold-start latency.",
    result:
      "Result: LCP dropped to under 1.5s. Organic traffic improved within weeks.",
  },
  {
    title: "Tailwind utility-first, no component library",
    context:
      "I needed fast iteration without design bottlenecks. Utility classes can clutter markup, but avoiding a library reduced bundle size and kept styling in one place.",
    result: "Result: Final CSS bundle under 20kb. Full design control.",
  },
  {
    title: "Integrated blog and knowledge base",
    context:
      "Marketing wanted SEO content without a separate CMS. Markdown files in the repo require developer deploys, but MDX + Next.js made content authoring simple.",
    result: "Result: Blog launched with 10+ articles.",
  },
];

export function CaseStudy() {
  return (
    <Chapter
      id="case-study"
      bgSrc={CHAPTER_ASSETS.caseStudy.bg}
      midSrc={CHAPTER_ASSETS.caseStudy.mid}
      density="normal"
    >
      {/* Intro */}
      <div>
        <h2 className="text-2xl md:text-3xl font-medium text-white">
          Case Study: Loopvet Sales Site
        </h2>
        <p className="mt-6 text-white/70 leading-relaxed max-w-2xl">
          Loopvet's sales site was the first touchpoint for potential customers.
          The old site was slow, hard to maintain, and underperforming on leads.
          I rebuilt it from scratch using Next.js, TypeScript, and
          Tailwind—focused on performance, SEO, and clarity.
        </p>
      </div>

      {/* Problem */}
      <section className="mt-16">
        <h3 className="text-xl font-medium text-white">Problem</h3>
        <ul className="mt-4 space-y-2 text-white/70">
          <li>
            • The existing site loaded slowly and ranked poorly in search.
          </li>
          <li>
            • Marketing had no way to update content without developer help.
          </li>
          <li>
            • Lead capture was underperforming; the funnel had friction.
          </li>
        </ul>
      </section>

      {/* Decisions */}
      <section className="mt-16">
        <h3 className="text-xl font-medium text-white mb-8">Key Decisions</h3>
        <div className="space-y-12">
          {decisions.map((decision) => (
            <article key={decision.title}>
              <h4 className="text-lg font-medium text-white">
                {decision.title}
              </h4>
              <p className="mt-2 text-white/70">{decision.context}</p>
              <p className="mt-2 text-sm text-white/50">{decision.result}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="mt-16">
        <h3 className="text-xl font-medium text-white">Outcome</h3>
        <ul className="mt-4 space-y-2 text-white/70">
          <li>
            • &gt;200% increase in qualified leads compared to previous site.
          </li>
          <li>
            • Organic traffic improved measurably within the first month.
          </li>
          <li>
            • Marketing could request content updates without re-architecture.
          </li>
        </ul>
      </section>

      {/* Reflection */}
      <section className="mt-16">
        <h3 className="text-xl font-medium text-white">
          What I'd Do Differently
        </h3>
        <ul className="mt-4 space-y-2 text-white/70">
          <li>
            • I would add a headless CMS earlier. Markdown worked, but
            non-developers still needed my help.
          </li>
          <li>
            • I would implement end-to-end tests before launch. Manual QA caught
            most issues, but a few edge cases slipped through.
          </li>
        </ul>
      </section>

      {/* Oracle placeholder */}
      <section className="mt-24 p-6 bg-white/5 rounded-lg border border-white/10">
        <p className="text-sm text-white/50 mb-2">Ask about this project</p>
        <input
          type="text"
          placeholder="Type a question…"
          className="w-full bg-transparent border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
          disabled
        />
        <p className="mt-2 text-xs text-white/40">
          AI feature coming soon — get direct answers grounded in the case
          study.
        </p>
      </section>
    </Chapter>
  );
}
