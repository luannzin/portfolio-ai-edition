/**
 * Chapter background asset paths.
 * EDIT THESE PATHS if filenames change.
 */

export const CHAPTER_ASSETS = {
  opening: {
    bg: "/BG_01_OPENING.png",
    mid: "/MID_01_OPENING.png",
  },
  approach: {
    bg: "/BG_02_APPROACH.png",
    mid: null,
  },
  stack: {
    bg: "/BG_03_STACK.png",
    mid: "/MID_03_STACK.png",
  },
  selectedWork: {
    bg: null,
    mid: null,
  },
  caseStudy: {
    bg: "/BG_05_CASE.png",
    mid: "/MID_05_CASE.png",
  },
  contact: {
    bg: "/BG_06_CLOSE.png",
    mid: null,
  },
} as const;

export type ChapterKey = keyof typeof CHAPTER_ASSETS;
