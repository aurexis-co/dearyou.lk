# DearYou.LK — Full Website Source

This package contains the complete responsive showcase website and all three interactive fictional love-story demos.

## Included routes

- `/` — DearYou.LK business landing page
- `/demos/rose-garden` — Rose Garden interactive demo
- `/demos/starlit` — Written in the Stars interactive demo
- `/demos/scrapbook` — Little Things scrapbook demo

The demo names and artwork are fictional. No customer photos or private messages are included.

## Run it on your computer

1. Install Node.js 22 or newer.
2. Open a terminal inside this folder.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

## Edit the content

- Main page copy and packages: `app/page.tsx`
- Demo text and fictional names: each `app/demos/*/page.tsx`
- Shared demo interactions: `app/demos/LoveDemo.tsx`
- Colours and design: `app/globals.css`
- Artwork and share image: `public/`

## Publish

Deploy the project to any modern Next.js-compatible host. Keep the whole folder structure and run the production command `npm run build` during deployment.

Current live showcase: https://dearyou-love-stories.itmmd2026.chatgpt.site

Built for DearYou.LK — “A whole love story, hidden in one link.”
