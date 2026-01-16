"use client";

/**
 * Mid layer component.
 * Optional depth layer between background and content.
 *
 * Responsibilities:
 * - Sits between BG (z-10) and content (z-30) at z-20
 * - Automatically hidden on mobile for performance
 * - Pointer events disabled
 * - Faster parallax than background for depth illusion
 */

import { useRef } from "react";
import Image from "next/image";
import { useParallax, useIsMobile } from "@/hooks";
import { PARALLAX } from "@/lib/constants";

interface MidLayerProps {
  /** Path to image in /public */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional custom parallax speed. Default: PARALLAX.mid (0.3) */
  speed?: number;
}

export function MidLayer({ src, alt, speed = PARALLAX.mid }: MidLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useParallax(ref, speed);

  // Don't render on mobile — performance optimization
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
