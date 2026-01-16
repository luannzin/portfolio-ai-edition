/**
 * Main page — assembles all chapters in order.
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
      <Opening />
      <Approach />
      <Stack />
      <SelectedWork />
      <CaseStudy />
      <Contact />
    </main>
  );
}
