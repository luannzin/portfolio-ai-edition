/**
 * MidLayer — optional mid-depth layer for visual depth.
 * Sits between background and content. Static for now (no parallax).
 */

import Image from "next/image";

interface MidLayerProps {
  src: string;
  className?: string;
}

export function MidLayer({ src, className = "" }: MidLayerProps) {
  return (
    <div
      className={`absolute inset-0 z-10 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
      />
    </div>
  );
}
