const stories = {
  rose: {
    theme: "rose", image: "../../assets/rose-garden.png", badge: "A love story in bloom", names: "Amaya & Noah", date: "Our favourite chapter · 14 February", title: "I would choose you in every season.", intro: "I gathered the softest parts of our story into one quiet little garden. Walk through it with me.", chapterKicker: "Chapter one · where it began", chapterTitle: "You made ordinary days feel golden.", chapterText: "It was never only the big moments. It was the late replies that became long calls, the familiar laugh across a crowded room and the way home started to feel like a person.", moments: [["01","Your kindness","You notice the small things and somehow make everyone around you feel seen."],["02","Our laughter","The kind that makes our faces hurt and turns a bad day completely around."],["03","The way you stay","Steady, gentle and present—even when life gets beautifully messy."]], letter: "My love, thank you for making the days softer and the future brighter. If I could keep one feeling forever, it would be the calm I find beside you. I hope we keep choosing each other in every season still to come.", finale: "My favourite place will always be beside you."
  },
  night: {
    theme: "night", image: "../../assets/starlit-beach.png", badge: "Somewhere under the same sky", names: "Selene & Kai", date: "11:11 · our universe", title: "Even the stars know your name.", intro: "For every night we stayed up talking and every tomorrow we quietly imagined—this one is ours.", chapterKicker: "Constellation one · the first hello", chapterTitle: "Some people arrive like moonlight.", chapterText: "Softly, then all at once. You became the person I wanted to tell everything to—the good news, the impossible days and every strange thought after midnight.", moments: [["✦","You feel like calm","A deep breath after a long day and the safest silence I have ever known."],["☾","You make me brave","With you, the future feels less like a question and more like an adventure."],["∞","You are my always","Not perfect, not effortless—just real, chosen and endlessly worth it."]], letter: "If distance, time or a thousand changing skies ever stand between us, remember this: somewhere under them, I am still choosing you. Thank you for being my midnight conversation and my morning certainty.", finale: "In every universe, I hope I find you."
  },
  paper: {
    theme: "paper", image: "../../assets/scrapbook-memories.png", badge: "A scrapbook of our favourite chaos", names: "Mira + Leo", date: "Collected with love · volume one", title: "Turns out, the little things were everything.", intro: "A few snapshots, questionable jokes and tiny adventures that somehow became my favourite life.", chapterKicker: "Page one · no posing allowed", chapterTitle: "We were a story before we knew it.", chapterText: "Coffee that went cold because we talked too long. Wrong turns that became the best part of the day. One hundred blurry photos and exactly zero regrets.", moments: [["☕","Our tiny rituals","The messages, snacks and silly routines that would mean nothing to anyone else."],["↟","Our detours","Every plan we changed, every place we found and every laugh along the way."],["☺","Your weird little smile","The one you make when you are trying not to laugh. Yes, that one."]], letter: "Hey you, loving you feels like collecting tiny pieces of sunlight. Thank you for every ordinary adventure, every ridiculous joke and every moment that became a memory before we noticed. Let us make a million more.", finale: "You are still my favourite plot twist."
  }
};

const root = document.querySelector(".love-demo");
const story = stories[root.dataset.story];
root.classList.add(`story-${story.theme}`);
document.querySelector(".demo-cover-image").src = story.image;
document.querySelector(".cover-badge").textContent = story.badge;
document.querySelector(".cover-date").textContent = story.date;
document.querySelector(".cover-names").textContent = story.names;
document.querySelector(".cover-title").textContent = story.title;
document.querySelector(".cover-intro").textContent = story.intro;
document.querySelector(".chapter-kicker").textContent = story.chapterKicker;
document.querySelector(".chapter-title").textContent = story.chapterTitle;
document.querySelector(".chapter-text").textContent = story.chapterText;

const revealGrid = document.querySelector(".reveal-grid");
story.moments.forEach(([symbol, title, text]) => {
  const card = document.createElement("button");
  card.className = "reveal-card";
  card.innerHTML = `<span class="reveal-symbol">${symbol}</span><span class="reveal-prompt">tap to reveal</span><strong>${title}</strong><small>${text}</small>`;
  card.addEventListener("click", () => {
    card.classList.toggle("revealed");
    card.querySelector(".reveal-prompt").textContent = card.classList.contains("revealed") ? "keep this close" : "tap to reveal";
  });
  revealGrid.appendChild(card);
});

document.querySelector(".open-story").addEventListener("click", () => {
  root.classList.add("story-opened");
  setTimeout(() => document.querySelector(".demo-story").scrollIntoView({ behavior: "smooth" }), 100);
});

document.querySelector(".open-letter").addEventListener("click", (event) => {
  event.currentTarget.replaceWith(Object.assign(document.createElement("div"), { className: "letter-paper", innerHTML: `<p>${story.letter}</p><span>Always yours ♡</span>` }));
});

document.querySelector(".open-finale").addEventListener("click", () => {
  const finale = document.querySelector(".finale");
  finale.classList.add("finale-open");
  document.querySelector(".finale-content").innerHTML = `<div class="heart-burst" aria-hidden="true">${"<i>♡</i>".repeat(12)}</div><p class="story-kicker">One last thing</p><h2>${story.finale}</h2><p>This is only a fictional demo. Your story can end with your own words, question or promise.</p>`;
});
