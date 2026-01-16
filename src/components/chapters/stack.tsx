/**
 * Stack chapter — "The System"
 * Technology groups. Static in this milestone.
 */

import { Chapter } from "@/components/layout";
import { CHAPTER_ASSETS } from "@/lib/assets";

const stackGroups = [
  {
    name: "Core",
    tools: "TypeScript, React, Next.js",
    reason:
      "Type safety and component architecture keep large codebases maintainable.",
  },
  {
    name: "Styling",
    tools: "Tailwind CSS, CSS3",
    reason:
      "Utility-first CSS accelerates iteration without sacrificing design control.",
  },
  {
    name: "Build & Tooling",
    tools: "Vite, Bun, Biome",
    reason: "Fast builds mean faster feedback loops and less context-switching.",
  },
  {
    name: "Backend (Support)",
    tools: "Node.js, AdonisJS, REST APIs",
    reason: "I can read and contribute to the API layer when frontend needs it.",
  },
  {
    name: "AI Tooling",
    tools: "Cursor, Claude, GPT-4",
    reason:
      "AI accelerates boilerplate, debugging, and edge case analysis—not decision-making.",
  },
];

export function Stack() {
  return (
    <Chapter
      id="stack"
      title="Stack"
      bgSrc={CHAPTER_ASSETS.stack.bg}
      midSrc={CHAPTER_ASSETS.stack.mid}
      density="loose"
    >
      <div className="space-y-10">
        {stackGroups.map((group) => (
          <article key={group.name}>
            <h3 className="text-lg font-medium text-white">{group.name}</h3>
            <p className="mt-1 text-white/50 text-sm">{group.tools}</p>
            <p className="mt-2 text-white/70">{group.reason}</p>
          </article>
        ))}
      </div>

      <p className="mt-16 text-sm text-white/40 italic">
        I avoid heavy abstractions that promise flexibility but add indirection.
        I prefer boring, readable code.
      </p>
    </Chapter>
  );
}
