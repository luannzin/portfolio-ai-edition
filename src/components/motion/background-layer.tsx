/**
 * BackgroundLayer — renders a full-bleed background image.
 * Covers entire chapter area with conservative opacity for text readability.
 */

import Image from "next/image";

interface BackgroundLayerProps {
  src: string;
  className?: string;
  priority?: boolean;
}

export function BackgroundLayer({
  src,
  className = "",
  priority = false,
}: BackgroundLayerProps) {
  return (
    <div
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
      {/* Subtle gradient overlay to reduce banding and improve text contrast */}
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
