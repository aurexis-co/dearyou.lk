import type { Metadata } from "next";
import LoveDemo, { type LoveDemoContent } from "../LoveDemo";

export const metadata: Metadata = {
  title: "Written in the Stars Demo — DearYou.LK",
  description: "A fictional cinematic moonlit love-story website by DearYou.LK.",
};

const content: LoveDemoContent = {
  theme: "night",
  image: "/starlit-beach.png",
  badge: "Somewhere under the same sky",
  names: "Selene & Kai",
  date: "11:11 · our universe",
  title: "Even the stars know your name.",
  intro: "For every night we stayed up talking and every tomorrow we quietly imagined—this one is ours.",
  chapterKicker: "Constellation one · the first hello",
  chapterTitle: "Some people arrive like moonlight.",
  chapterText: "Softly, then all at once. You became the person I wanted to tell everything to—the good news, the impossible days and every strange thought after midnight.",
  moments: [
    { symbol: "✦", title: "You feel like calm", text: "A deep breath after a long day and the safest silence I have ever known." },
    { symbol: "☾", title: "You make me brave", text: "With you, the future feels less like a question and more like an adventure." },
    { symbol: "∞", title: "You are my always", text: "Not perfect, not effortless—just real, chosen and endlessly worth it." },
  ],
  letter: "If distance, time or a thousand changing skies ever stand between us, remember this: somewhere under them, I am still choosing you. Thank you for being my midnight conversation and my morning certainty.",
  finale: "In every universe, I hope I find you.",
};

export default function StarlitDemo() {
  return <LoveDemo content={content} />;
}
