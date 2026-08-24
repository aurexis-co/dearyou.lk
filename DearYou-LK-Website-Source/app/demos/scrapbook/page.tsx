import type { Metadata } from "next";
import LoveDemo, { type LoveDemoContent } from "../LoveDemo";

export const metadata: Metadata = {
  title: "Little Things Demo — DearYou.LK",
  description: "A fictional playful scrapbook love-story website by DearYou.LK.",
};

const content: LoveDemoContent = {
  theme: "paper",
  image: "/scrapbook-memories.png",
  badge: "A scrapbook of our favourite chaos",
  names: "Mira + Leo",
  date: "Collected with love · volume one",
  title: "Turns out, the little things were everything.",
  intro: "A few snapshots, questionable jokes and tiny adventures that somehow became my favourite life.",
  chapterKicker: "Page one · no posing allowed",
  chapterTitle: "We were a story before we knew it.",
  chapterText: "Coffee that went cold because we talked too long. Wrong turns that became the best part of the day. One hundred blurry photos and exactly zero regrets.",
  moments: [
    { symbol: "☕", title: "Our tiny rituals", text: "The messages, snacks and silly routines that would mean nothing to anyone else." },
    { symbol: "↟", title: "Our detours", text: "Every plan we changed, every place we found and every laugh along the way." },
    { symbol: "☺", title: "Your weird little smile", text: "The one you make when you are trying not to laugh. Yes, that one." },
  ],
  letter: "Hey you, loving you feels like collecting tiny pieces of sunlight. Thank you for every ordinary adventure, every ridiculous joke and every moment that became a memory before we noticed. Let us make a million more.",
  finale: "You are still my favourite plot twist.",
};

export default function ScrapbookDemo() {
  return <LoveDemo content={content} />;
}
