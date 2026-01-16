/**
 * BackgroundLayer — renders a full-bleed background image.
 * Covers entire chapter area, fades at edges, no pointer events.
 */

import Image from "next/image";

interface BackgroundLayerProps {
  src: string;
  className?: string;
}

export function BackgroundLayer({ src, className = "" }: BackgroundLayerProps) {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        priority
        className="object-cover opacity-60"
        sizes="100vw"
      />
    </div>
  );
}
