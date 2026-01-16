/**
 * Chapter layout wrapper.
 * Provides consistent structure for each chapter section.
 *
 * Responsibilities:
 * - Full viewport height minimum
 * - Relative positioning (enables absolute children for layers)
 * - Consistent vertical padding
 * - Z-index layering: BG (z-10), MID (z-20), content (z-30)
 */

import { ReactNode } from "react";

interface ChapterProps {
  /** Chapter content */
  children: ReactNode;
  /** Unique ID for navigation / scroll tracking */
  id: string;
  /** Additional className */
  className?: string;
  /** Minimum height. Default: min-h-screen */
  minHeight?: string;
}

export function Chapter({
  children,
  id,
  className = "",
  minHeight = "min-h-screen",
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`
        relative
        ${minHeight}
        w-full
        overflow-hidden
        ${className}
      `}
    >
      {/* Content sits on z-30, above all visual layers */}
      <div className="relative z-30 h-full">{children}</div>
    </section>
  );
}
