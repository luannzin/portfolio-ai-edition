"use client";

/**
 * Selected Work chapter — Projects Index
 * Project cards with staggered reveal.
 */

import { Chapter } from "@/components/layout";
import { FadeIn, StaggerList, StaggerItem } from "@/components/motion";

const projects = [
  {
    name: "Loopvet Sales Site",
    summary: "Rebuilt the company's public site for speed, SEO, and conversions.",
    role: "Lead frontend developer",
    metric: ">200% increase in lead capture after launch.",
    link: "#", // [FILL: URL]
  },
  {
    name: "Loopvet Core App Migration",
    summary: "Migrated main product from React 16 + Vite to modern stack.",
    role: "Frontend developer",
    metric: "60–70% reduction in build time.",
    link: null, // internal
  },
  {
    name: "PDF Microservice",
    summary: "Built a backend service for automated PDF generation.",
    role: "Fullstack contributor",
    metric: null, // [FILL: metric]
    link: null, // internal
  },
];

export function SelectedWork() {
  return (
    <Chapter
      id="selected-work"
      className="flex items-center justify-center py-32"
    >
      <div className="max-w-4xl px-6 w-full">
        <FadeIn>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-16">
            Selected Work
          </h2>
        </FadeIn>

        <StaggerList className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <article className="p-6 bg-white/5 rounded-lg">
                <h3 className="text-lg font-medium text-white">
                  {project.name}
                </h3>
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
              </article>
            </StaggerItem>
          ))}
        </StaggerList>
      </div>
    </Chapter>
  );
}
