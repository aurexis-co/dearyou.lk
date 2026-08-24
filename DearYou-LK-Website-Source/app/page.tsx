import Link from "next/link";

const demos = [
  {
    href: "/demos/rose-garden",
    number: "01",
    eyebrow: "Soft editorial romance",
    title: "Rose Garden",
    copy: "A gentle, story-led reveal with memories, a letter and one beautiful final promise.",
    className: "demo-card demo-rose",
  },
  {
    href: "/demos/starlit",
    number: "02",
    eyebrow: "Cinematic & intimate",
    title: "Written in the Stars",
    copy: "A moonlit love story with hidden reasons, quiet motion and a midnight finale.",
    className: "demo-card demo-night",
  },
  {
    href: "/demos/scrapbook",
    number: "03",
    eyebrow: "Playful memory book",
    title: "Little Things",
    copy: "A bright digital scrapbook filled with tiny adventures, favourite moments and surprises.",
    className: "demo-card demo-paper",
  },
];

const experiences = [
  ["✦", "Your story, not a template", "Every page is shaped around the couple, the occasion and the feeling you want to leave behind."],
  ["♫", "A song that means something", "Add the track that takes both of you back to the same memory."],
  ["♡", "Tap-to-reveal moments", "Turn reasons, promises and inside jokes into little interactive discoveries."],
  ["□", "A living photo gallery", "Your best photographs become a flowing, mobile-first story instead of a plain slideshow."],
  ["↗", "Private shareable link", "Send one difficult-to-guess link or place it inside a handwritten card as a QR surprise."],
  ["∞", "Made for the final reaction", "Build gently toward a proposal, birthday wish, apology, anniversary message or final reveal."],
];

const packages = [
  {
    name: "Mini",
    note: "A sweet, simple surprise",
    photos: "Up to 6 photos",
    items: ["Personal message", "One interactive reveal", "Mobile-ready private link"],
  },
  {
    name: "Signature",
    note: "The complete love story",
    photos: "Up to 15 photos",
    items: ["Full interactive story", "Hidden reasons & promises", "Love letter + music", "Final reveal", "2 revisions"],
    featured: true,
  },
  {
    name: "Forever Deluxe",
    note: "Built around your whole story",
    photos: "Up to 30 photos",
    items: ["Custom theme & story", "Premium animations", "Love letter + music", "Printed QR card design", "3 revisions"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link href="/" className="brand" aria-label="DearYou.LK home">
          <span className="brand-mark">D<span>♡</span>Y</span>
          <span>DearYou.LK</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#stories">Examples</a>
          <a href="#packages">Packages</a>
          <a href="#how">How it works</a>
        </nav>
        <a className="header-cta" href="#order">Create yours <span>↗</span></a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><span>✦</span> Personal love stories, made digital</p>
          <h1>A whole love story,<br /><em>hidden in one link.</em></h1>
          <p className="hero-lead">
            We turn your photos, favourite song, memories and words into a private interactive website they will never expect.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#stories">Explore the stories <span>↓</span></a>
            <a className="button button-ghost" href="#order">Order a surprise</a>
          </div>
          <div className="hero-footnote">
            <div className="tiny-avatars" aria-hidden="true"><span>♡</span><span>✦</span><span>∞</span></div>
            <p><strong>Made one story at a time</strong><br />For birthdays, anniversaries & just because.</p>
          </div>
        </div>

        <div className="hero-art" aria-label="Preview of a DearYou.LK love story">
          <div className="hero-orbit orbit-one">our song <span>♫</span></div>
          <div className="hero-orbit orbit-two">tap to reveal <span>♡</span></div>
          <div className="phone-preview">
            <div className="phone-top"><span>9:41</span><span>● ● ▰</span></div>
            <div className="preview-photo">
              <span className="preview-tape" />
              <div className="preview-silhouette"><i /><b /></div>
              <p>our favourite chapter</p>
            </div>
            <p className="preview-kicker">A LITTLE SOMETHING FOR YOU</p>
            <h2>Hey, love.</h2>
            <p className="preview-copy">I gathered a few of my favourite pieces of us into one little place.</p>
            <span className="preview-button">Open my heart&nbsp; →</span>
          </div>
          <div className="floating-note note-one"><span>03</span><b>Our first adventure</b><small>Still my favourite day.</small></div>
          <div className="floating-note note-two"><span>♡</span><b>One last thing…</b><small>I choose you.</small></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Service highlights">
        <p><span>01</span><strong>24–48 hour</strong> delivery</p>
        <p><span>02</span><strong>Private link</strong> made for one person</p>
        <p><span>03</span><strong>Beautiful on mobile</strong> from the first tap</p>
      </section>

      <section className="stories section-shell" id="stories">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span>✦</span> Choose a feeling</p>
            <h2>Three stories.<br /><em>Three kinds of magic.</em></h2>
          </div>
          <p>These demos use fictional names and original artwork. Your finished story will be designed around your own memories.</p>
        </div>
        <div className="demo-grid">
          {demos.map((demo) => (
            <Link href={demo.href} className={demo.className} key={demo.href}>
              <div className="demo-visual">
                <span className="demo-number">{demo.number}</span>
                <span className="demo-open">Open story ↗</span>
                <div className="demo-scene" />
              </div>
              <div className="demo-body">
                <p>{demo.eyebrow}</p>
                <h3>{demo.title}</h3>
                <span>{demo.copy}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="section-shell">
          <div className="section-heading centered-heading">
            <p className="eyebrow eyebrow-light"><span>✦</span> More than a webpage</p>
            <h2>Every little detail can<br /><em>feel like the two of you.</em></h2>
          </div>
          <div className="experience-grid">
            {experiences.map(([icon, title, copy]) => (
              <article key={title}>
                <span className="experience-icon">{icon}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="packages section-shell" id="packages">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span>✦</span> Pick your story size</p>
            <h2>Simple packages.<br /><em>Unforgettable delivery.</em></h2>
          </div>
          <p>Not sure which one fits? Send the number of photos and the occasion—we will guide you.</p>
        </div>
        <div className="package-grid">
          {packages.map((item) => (
            <article className={`package-card${item.featured ? " featured" : ""}`} key={item.name}>
              {item.featured && <span className="popular">Most loved</span>}
              <p className="package-note">{item.note}</p>
              <h3>{item.name}</h3>
              <p className="package-photos">{item.photos}</p>
              <ul>{item.items.map((line) => <li key={line}><span>♡</span>{line}</li>)}</ul>
              <a href="#order">Ask for pricing <span>↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="how-section" id="how">
        <div className="section-shell how-grid">
          <div className="how-copy">
            <p className="eyebrow eyebrow-light"><span>✦</span> From idea to happy tears</p>
            <h2>We make the surprise.<br /><em>You take the credit.</em></h2>
            <p>Every order is handled personally. Your photos and story stay private and are never used as a public example without permission.</p>
          </div>
          <ol className="steps">
            <li><span>01</span><div><h3>Tell us the occasion</h3><p>Birthday, anniversary, proposal, apology, long-distance love—or no reason at all.</p></div></li>
            <li><span>02</span><div><h3>Send the memories</h3><p>Share your photos, names, favourite song, message and the little details only you know.</p></div></li>
            <li><span>03</span><div><h3>Approve your private preview</h3><p>We build, refine and send your review link. A 50% deposit starts the story.</p></div></li>
            <li><span>04</span><div><h3>Send the final surprise</h3><p>After the balance is settled, you receive the finished private link—ready to make their day.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="order section-shell" id="order">
        <div className="order-card">
          <p className="eyebrow eyebrow-light"><span>♡</span> Ready when you are</p>
          <h2>Whose heart are we<br /><em>surprising next?</em></h2>
          <p>DM <strong>“LOVE”</strong> to <strong>@dearyou.lk</strong> on Instagram or TikTok. Delivery is usually within 24–48 hours.</p>
          <div className="order-actions">
            <a className="button button-cream" href="https://www.instagram.com/_dearyou.lk" target="_blank" rel="noreferrer">DM on Instagram <b>↗</b></a>
            <a href="https://www.tiktok.com/@_dearyou.lk target="_blank" rel="noreferrer">Message on TikTok ↗</a>
          </div>
          <div className="order-scribble" aria-hidden="true">made for one person ♡</div>
        </div>
      </section>

      <footer>
        <Link href="/" className="brand brand-footer"><span className="brand-mark">D<span>♡</span>Y</span><span>DearYou.LK</span></Link>
        <p>A whole love story, hidden in one link.</p>
        <div><a href="#stories">Examples</a><a href="#packages">Packages</a><a href="#order">Order</a></div>
        <small>© 2026 DearYou.LK · Made with a little extra heart in Sri Lanka.</small>
      </footer>
    </main>
  );
}
