/**
 * Selected Work chapter — Projects Index
 * Project cards. Static in this milestone.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

const projects = [
  {
    name: "Loopvet Sales Site",
    summary:
      "Rebuilt the company's public site for speed, SEO, and conversions.",
    role: "Lead frontend developer",
    metric: ">200% increase in lead capture after launch.",
  },
  {
    name: "Loopvet Core App Migration",
    summary: "Migrated main product from React 16 + Vite to modern stack.",
    role: "Frontend developer",
    metric: "60–70% reduction in build time.",
  },
  {
    name: "PDF Microservice",
    summary: "Built a backend service for automated PDF generation.",
    role: "Fullstack contributor",
    metric: null,
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
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="p-6 bg-white/5 rounded-lg border border-white/10"
          >
            <h3 className="text-lg font-medium text-white">{project.name}</h3>
            <p className="mt-2 text-sm text-white/70">{project.summary}</p>
            <p className="mt-3 text-xs text-white/50">{project.role}</p>
            {project.metric && (
              <p className="mt-4 text-sm text-white/90 font-medium">
                {project.metric}
              </p>
            )}
          </article>
        ))}
      </div>
    </Chapter>
  );
}
