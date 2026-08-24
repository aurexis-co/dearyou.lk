import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DearYou.LK — Love Stories in One Link",
  description:
    "Private interactive love-story websites made from your photos, favourite song, memories and words.",
  metadataBase: new URL("https://dearyou-love-stories.itmmd2026.chatgpt.site"),
  openGraph: {
    title: "DearYou.LK — A whole love story, hidden in one link.",
    description:
      "Turn your photos, memories, favourite song and words into a private interactive surprise website.",
    type: "website",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "DearYou.LK — A whole love story, hidden in one link." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DearYou.LK — A whole love story, hidden in one link.",
    description: "Private interactive surprise websites, made for one person.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
