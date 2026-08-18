import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./site-and-home.css";
import "./header-and-testimonials.css";
import "./product-pages.css";
import "./about-contact.css";
import { WhatsAppButton } from "./_components/home/WhatsAppButton";
import { WhatsAppBubble } from "./_components/home/WhatsAppBubble";
import { AnnouncementBanner } from "./_components/AnnouncementBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyCabify Content-Led Concept",
  description: "Complete taxi management, made simple for UK taxi operators.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/mycabify-logo.png",
    shortcut: "/mycabify-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnnouncementBanner />
        {children}
        <WhatsAppButton />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
