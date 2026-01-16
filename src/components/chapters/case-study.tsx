/**
 * Case Study chapter — Loopvet Sales Site
 * Long-form content with improved typography for readability.
 * Uses narrow content width and vignette for text protection.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

const decisions = [
  {
    title: "Static-first with Next.js SSG",
    context:
      "The site content rarely changed, but page speed was critical for SEO. SSG limits dynamic personalization, but eliminates cold-start latency.",
    result:
      "LCP dropped to under 1.5s. Organic traffic improved within weeks.",
  },
  {
    title: "Tailwind utility-first, no component library",
    context:
      "I needed fast iteration without design bottlenecks. Utility classes can clutter markup, but avoiding a library reduced bundle size.",
    result: "Final CSS bundle under 20kb. Full design control.",
  },
  {
    title: "Integrated blog and knowledge base",
    context:
      "Marketing wanted SEO content without a separate CMS. Markdown in the repo requires developer deploys, but MDX + Next.js made authoring simple.",
    result: "Blog launched with 10+ articles at go-live.",
  },
];

export function CaseStudy() {
  return (
    <Chapter
      id="case-study"
      bgSrc={CHAPTER_ASSETS.caseStudy.bg}
      midSrc={CHAPTER_ASSETS.caseStudy.mid}
      density="normal"
      contentSize="narrow"
      vignette
    >
      {/* Intro */}
      <header className="mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight">
          Case Study: Loopvet Sales Site
        </h2>
        <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed">
          Loopvet's sales site was the first touchpoint for potential customers.
          The old site was slow, hard to maintain, and underperforming on leads.
          I rebuilt it from scratch using Next.js, TypeScript, and
          Tailwind—focused on performance, SEO, and clarity.
        </p>
      </header>

      {/* Problem */}
      <section className="mb-14 md:mb-16">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-5">
          Problem
        </h3>
        <ul className="space-y-3 text-white/70 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              The existing site loaded slowly and ranked poorly in search.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Marketing had no way to update content without developer help.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Lead capture was underperforming; the funnel had friction.
            </span>
          </li>
        </ul>
      </section>

      {/* Decisions */}
      <section className="mb-14 md:mb-16">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-8">
          Key Decisions
        </h3>
        <div className="space-y-10 md:space-y-12">
          {decisions.map((decision) => (
            <article key={decision.title}>
              <h4 className="text-lg font-medium text-white mb-3">
                {decision.title}
              </h4>
              <p className="text-white/70 leading-relaxed mb-2">
                {decision.context}
              </p>
              <p className="text-sm text-white/50 italic">
                Result: {decision.result}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="mb-14 md:mb-16">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-5">
          Outcome
        </h3>
        <ul className="space-y-3 text-white/70 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              &gt;200% increase in qualified leads compared to previous site.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Organic traffic improved measurably within the first month.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Marketing could request content updates without re-architecture.
            </span>
          </li>
        </ul>
      </section>

      {/* Reflection */}
      <section className="mb-14 md:mb-16">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-5">
          What I'd Do Differently
        </h3>
        <ul className="space-y-3 text-white/70 leading-relaxed">
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Add a headless CMS earlier. Markdown worked, but non-developers
              still needed my help.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white/40 select-none">•</span>
            <span>
              Implement end-to-end tests before launch. Manual QA caught most
              issues, but a few edge cases slipped through.
            </span>
          </li>
        </ul>
      </section>

      {/* Oracle placeholder */}
      <section className="p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] rounded-xl">
        <p className="text-sm text-white/50 mb-3">Ask about this project</p>
        <input
          type="text"
          placeholder="Type a question…"
          className="
            w-full bg-transparent
            border border-white/20 rounded-lg
            px-4 py-3
            text-white placeholder:text-white/30
            focus:outline-none focus:border-white/40
            transition-colors
          "
          disabled
        />
        <p className="mt-3 text-xs text-white/40">
          AI feature coming soon — get direct answers grounded in the case
          study.
        </p>
      </section>
    </Chapter>
  );
}
