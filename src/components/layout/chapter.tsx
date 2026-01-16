/**
 * Chapter layout wrapper.
 * Provides consistent structure with optional background layers and vignette.
 *
 * Z-index layering:
 * - z-0: Background layer
 * - z-10: Mid layer
 * - z-15: Vignette overlay
 * - z-20: Content
 */

import { ReactNode } from "react";
import { BackgroundLayer } from "@/components/motion/background-layer";
import { MidLayer } from "@/components/motion/mid-layer";

type Density = "loose" | "normal";
type ContentSize = "narrow" | "normal";

interface ChapterProps {
  id: string;
  children: ReactNode;
  title?: string;
  bgSrc?: string | null;
  midSrc?: string | null;
  density?: Density;
  contentSize?: ContentSize;
  vignette?: boolean;
  className?: string;
}

const densityStyles: Record<Density, string> = {
  loose: "py-24 md:py-32 lg:py-40",
  normal: "py-16 md:py-24 lg:py-32",
};

const contentSizeStyles: Record<ContentSize, string> = {
  narrow: "max-w-2xl",
  normal: "max-w-4xl",
};

export function Chapter({
  id,
  children,
  title,
  bgSrc,
  midSrc,
  density = "normal",
  contentSize = "normal",
  vignette = false,
  className = "",
}: ChapterProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
    >
      {/* Background layer */}
      {bgSrc && <BackgroundLayer src={bgSrc} priority={id === "opening"} />}

      {/* Mid layer */}
      {midSrc && <MidLayer src={midSrc} />}

      {/* Vignette overlay for text protection */}
      {vignette && (
        <div
          className="absolute inset-0 z-[15] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(10, 10, 10, 0.6) 70%, rgba(10, 10, 10, 0.85) 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div
        className={`
          relative z-20 mx-auto px-6 md:px-8
          ${densityStyles[density]}
          ${contentSizeStyles[contentSize]}
        `}
      >
        {title && (
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-10 md:mb-14">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
