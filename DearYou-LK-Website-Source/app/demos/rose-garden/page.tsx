import type { Metadata } from "next";
import LoveDemo, { type LoveDemoContent } from "../LoveDemo";

export const metadata: Metadata = {
  title: "Rose Garden Demo — DearYou.LK",
  description: "A fictional soft editorial love-story website by DearYou.LK.",
};

const content: LoveDemoContent = {
  theme: "rose",
  image: "/rose-garden.png",
  badge: "A love story in bloom",
  names: "Amaya & Noah",
  date: "Our favourite chapter · 14 February",
  title: "I would choose you in every season.",
  intro: "I gathered the softest parts of our story into one quiet little garden. Walk through it with me.",
  chapterKicker: "Chapter one · where it began",
  chapterTitle: "You made ordinary days feel golden.",
  chapterText: "It was never only the big moments. It was the late replies that became long calls, the familiar laugh across a crowded room and the way home started to feel like a person.",
  moments: [
    { symbol: "01", title: "Your kindness", text: "You notice the small things and somehow make everyone around you feel seen." },
    { symbol: "02", title: "Our laughter", text: "The kind that makes our faces hurt and turns a bad day completely around." },
    { symbol: "03", title: "The way you stay", text: "Steady, gentle and present—even when life gets beautifully messy." },
  ],
  letter: "My love, thank you for making the days softer and the future brighter. If I could keep one feeling forever, it would be the calm I find beside you. I hope we keep choosing each other in every season still to come.",
  finale: "My favourite place will always be beside you.",
};

export default function RoseGardenDemo() {
  return <LoveDemo content={content} />;
}
