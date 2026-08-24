"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export type LoveDemoContent = {
  theme: "rose" | "night" | "paper";
  image: string;
  badge: string;
  names: string;
  date: string;
  title: string;
  intro: string;
  chapterKicker: string;
  chapterTitle: string;
  chapterText: string;
  moments: { symbol: string; title: string; text: string }[];
  letter: string;
  finale: string;
};

export default function LoveDemo({ content }: { content: LoveDemoContent }) {
  const [opened, setOpened] = useState(false);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [letterOpen, setLetterOpen] = useState(false);
  const [finaleOpen, setFinaleOpen] = useState(false);
  const storyRef = useRef<HTMLElement>(null);

  const openStory = () => {
    setOpened(true);
    window.setTimeout(() => storyRef.current?.scrollIntoView({ behavior: "smooth" }), 120);
  };

  const revealMoment = (index: number) => {
    setRevealed((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  return (
    <main className={`love-demo story-${content.theme}${opened ? " story-opened" : ""}`}>
      <section className="demo-cover">
        <Image className="demo-cover-image" src={content.image} alt="Original fictional couple artwork" fill priority sizes="100vw" />
        <div className="demo-cover-shade" />
        <nav className="demo-nav">
          <Link href="/">← DearYou.LK</Link>
          <span>Fictional showcase</span>
        </nav>
        <div className="cover-copy">
          <p className="cover-badge">{content.badge}</p>
          <p className="cover-date">{content.date}</p>
          <h1>{content.names}</h1>
          <h2>{content.title}</h2>
          <p>{content.intro}</p>
          <button type="button" onClick={openStory}>
            Open our story <span>♡</span>
          </button>
        </div>
        <span className="scroll-whisper">A little surprise is waiting below ↓</span>
      </section>

      <section className="demo-story" ref={storyRef} aria-hidden={!opened}>
        <div className="story-intro story-width">
          <p className="story-kicker">{content.chapterKicker}</p>
          <h2>{content.chapterTitle}</h2>
          <p>{content.chapterText}</p>
          <span className="story-flourish">♡</span>
        </div>

        <div className="reveal-section story-width">
          <p className="story-kicker">Tap each one</p>
          <h2>Three little pieces of us</h2>
          <div className="reveal-grid">
            {content.moments.map((moment, index) => {
              const isRevealed = revealed.includes(index);
              return (
                <button
                  className={`reveal-card${isRevealed ? " revealed" : ""}`}
                  key={moment.title}
                  onClick={() => revealMoment(index)}
                  aria-expanded={isRevealed}
                >
                  <span className="reveal-symbol">{moment.symbol}</span>
                  <span className="reveal-prompt">{isRevealed ? "keep this close" : "tap to reveal"}</span>
                  <strong>{moment.title}</strong>
                  <small>{moment.text}</small>
                </button>
              );
            })}
          </div>
        </div>

        <div className={`letter-wrap story-width${letterOpen ? " letter-open" : ""}`}>
          <div className="envelope" aria-hidden="true"><span>♡</span></div>
          <div className="letter-copy">
            <p className="story-kicker">For your eyes only</p>
            <h2>There is a letter for you.</h2>
            {!letterOpen ? (
              <button type="button" onClick={() => setLetterOpen(true)}>Break the seal</button>
            ) : (
              <div className="letter-paper">
                <p>{content.letter}</p>
                <span>Always yours ♡</span>
              </div>
            )}
          </div>
        </div>

        <div className={`finale${finaleOpen ? " finale-open" : ""}`}>
          <div className="finale-inner">
            <p className="story-kicker">One last thing</p>
            {!finaleOpen ? (
              <>
                <h2>Ready for the final reveal?</h2>
                <button type="button" onClick={() => setFinaleOpen(true)}>Yes, show me ♡</button>
              </>
            ) : (
              <>
                <div className="heart-burst" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, index) => <i key={index}>♡</i>)}
                </div>
                <h2>{content.finale}</h2>
                <p>This is only a fictional demo. Your story can end with your own words, question or promise.</p>
              </>
            )}
          </div>
        </div>

        <footer className="demo-footer">
          <p>Fictional names · original artwork · no customer data</p>
          <Link href="/#order">Create a story like this with DearYou.LK ↗</Link>
        </footer>
      </section>
    </main>
  );
}
