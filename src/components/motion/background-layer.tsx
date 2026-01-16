"use client";

/**
 * BackgroundLayer — renders a full-bleed background image with optional parallax.
 * Covers entire chapter area with conservative opacity for text readability.
 */

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/hooks/use-parallax";

interface BackgroundLayerProps {
  src: string;
  className?: string;
  priority?: boolean;
  parallaxSpeed?: number;
  parallaxEnabled?: boolean;
}

export function BackgroundLayer({
  src,
  className = "",
  priority = false,
  parallaxSpeed = 0,
  parallaxEnabled = false,
}: BackgroundLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, parallaxSpeed, parallaxEnabled);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      {/* Gradient overlay to reduce banding and improve text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.3) 100%)",
        }}
      />
    </div>
  );
}
