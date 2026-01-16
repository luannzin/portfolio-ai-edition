/**
 * Chapter layout wrapper.
 * Provides consistent structure with optional background layers.
 *
 * Z-index layering:
 * - z-0: Background layer
 * - z-10: Mid layer
 * - z-20: Content
 */

import { ReactNode } from "react";
import { BackgroundLayer } from "@/components/motion/background-layer";
import { MidLayer } from "@/components/motion/mid-layer";

type Density = "loose" | "normal";

interface ChapterProps {
  id: string;
  children: ReactNode;
  title?: string;
  bgSrc?: string | null;
  midSrc?: string | null;
  density?: Density;
  className?: string;
}

const densityStyles: Record<Density, string> = {
  loose: "py-32 md:py-48",
  normal: "py-24 md:py-32",
};

export function Chapter({
  id,
  children,
  title,
  bgSrc,
  midSrc,
  density = "normal",
  className = "",
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
    >
      {/* Background layers */}
      {bgSrc && <BackgroundLayer src={bgSrc} />}
      {midSrc && <MidLayer src={midSrc} />}

      {/* Content */}
      <div
        className={`relative z-20 mx-auto max-w-4xl px-6 ${densityStyles[density]}`}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-12">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
