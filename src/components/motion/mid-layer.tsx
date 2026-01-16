"use client";

/**
 * MidLayer — optional mid-depth layer for visual depth with optional parallax.
 * Sits between background and content with lower opacity.
 */

import { useRef } from "react";
import Image from "next/image";
import { useParallax } from "@/hooks/use-parallax";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface MidLayerProps {
  src: string;
  className?: string;
  parallaxSpeed?: number;
  parallaxEnabled?: boolean;
}

export function MidLayer({
  src,
  className = "",
  parallaxSpeed = 0,
  parallaxEnabled = false,
}: MidLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  useParallax(ref, parallaxSpeed, parallaxEnabled && !isMobile);

  // Don't render on mobile — performance optimization
  if (isMobile) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={`absolute inset-0 z-10 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
        quality={80}
      />
    </div>
  );
}
