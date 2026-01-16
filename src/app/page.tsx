/**
 * Main page — renders all 6 chapters in order.
 * Single-page scroll experience.
 */

import {
  Opening,
  Approach,
  Stack,
  SelectedWork,
  CaseStudy,
  Contact,
} from "@/components/chapters";

export default function Home() {
  return (
    <main>
      {/* Top spacer */}
      <div className="h-16" aria-hidden="true" />

      {/* Chapters */}
      <Opening />
      <Approach />
      <Stack />
      <SelectedWork />
      <CaseStudy />
      <Contact />

      {/* Bottom spacer */}
      <div className="h-32" aria-hidden="true" />
    </main>
  );
}
