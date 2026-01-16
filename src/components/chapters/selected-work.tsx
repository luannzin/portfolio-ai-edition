/**
 * Selected Work chapter — Projects Index
 * Premium static cards with gallery-label styling.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

const projects = [
  {
    name: "Loopvet Sales Site",
    summary:
      "Rebuilt the company's public site for speed, SEO, and conversions.",
    role: "Lead frontend developer",
    metric: ">200% increase in lead capture",
    link: "#",
  },
  {
    name: "Core App Migration",
    summary: "Migrated main product from React 16 + Vite to modern stack.",
    role: "Frontend developer",
    metric: "60–70% faster build times",
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
  return (
    <Chapter
      id="selected-work"
      title="Selected Work"
      bgSrc={CHAPTER_ASSETS.selectedWork.bg}
      density="loose"
    >
      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="
              group relative
              p-6 md:p-8
              bg-white/[0.03]
              border border-white/[0.08]
              rounded-xl
              shadow-[0_2px_20px_rgba(0,0,0,0.3)]
              transition-colors duration-200
              hover:bg-white/[0.05]
              hover:border-white/[0.12]
            "
          >
            {/* Project name */}
            <h3 className="text-lg md:text-xl font-medium text-white leading-snug">
              {project.name}
            </h3>

            {/* Summary */}
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              {project.summary}
            </p>

            {/* Role */}
            <p className="mt-4 text-xs text-white/40 uppercase tracking-wide">
              {project.role}
            </p>

            {/* Metric — strong visual emphasis */}
            {project.metric && (
              <p className="mt-5 text-base font-medium text-white/90">
                {project.metric}
              </p>
            )}

            {/* Link placeholder */}
            {project.link && (
              <a
                href={project.link}
                className="
                  mt-6 inline-block
                  text-sm text-white/50
                  underline underline-offset-4 decoration-white/20
                  transition-colors duration-200
                  hover:text-white/80 hover:decoration-white/40
                "
              >
                View project →
              </a>
            )}
          </article>
        ))}
      </div>
    </Chapter>
  );
}
