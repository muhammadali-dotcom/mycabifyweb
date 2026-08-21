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

const title = "MyCabify Content-Led Concept";
const description =
  "Complete taxi management, made simple for UK taxi operators.";

export const metadata: Metadata = {
  metadataBase: new URL("https://mycabify.com"),
  title,
  description,
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/mycabify-logo.png",
    shortcut: "/mycabify-logo.png",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "MyCabify",
    images: [{ url: "/mycabify-logo.png", width: 1440, height: 1440 }],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/mycabify-logo.png"],
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
