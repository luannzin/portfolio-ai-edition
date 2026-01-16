"use client";

/**
 * Background layer component.
 * Renders an absolutely positioned image meant for parallax depth.
 *
 * Responsibilities:
 * - Always behind content (z-10)
 * - Consumes full viewport with cover fit
 * - Pointer events disabled (click-through)
 * - Parallax applied via useParallax hook
 */

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/hooks";
import { PARALLAX } from "@/lib/constants";

interface BackgroundLayerProps {
  /** Path to image in /public */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Optional custom parallax speed. Default: PARALLAX.background (0.1) */
  speed?: number;
}

export function BackgroundLayer({
  src,
  alt,
  speed = PARALLAX.background,
}: BackgroundLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, speed);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
    </div>
  );
}
