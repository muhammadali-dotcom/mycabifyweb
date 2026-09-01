import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./site-and-home.css";
import "./header-and-testimonials.css";
import "./product-pages.css";
import "./about-contact.css";
import { AnnouncementBanner } from "./_components/AnnouncementBanner";
import { ScrollToTop } from "./_components/ScrollToTop";
import { baseUrl } from "./_lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const title = "MyCabify - Minicab Dispatch Software";
const description = "Complete minicab management, made simple for UK minicab operators.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MyCabify",
  url: baseUrl,
  logo: `${baseUrl}/mycabify-logo.png`,
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ScrollToTop />
        <AnnouncementBanner />
        {children}
      </body>
    </html>
  );
}
