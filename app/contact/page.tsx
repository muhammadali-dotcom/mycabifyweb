import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import SiteFooter from "../SiteFooter";
import { EnquiryArea } from "../_components/contact/EnquiryArea";
import { OfficeAndMap, phone, email, officeHours } from "../_components/contact/OfficeAndMap";

const title = "Contact Us | MyCabify";
const description =
  "Get in touch with MyCabify. Visit our Hounslow office, call, email, or send an enquiry to talk about taxi dispatch software for your business.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MyCabify",
  telephone: phone,
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "66 Kingsley Road",
    addressLocality: "Hounslow",
    addressRegion: "Middlesex",
    postalCode: "TW3 1QA",
    addressCountry: "GB",
  },
  openingHours: officeHours,
  url: "https://mycabify.com/contact",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <SiteHeader />
      <EnquiryArea />
      <OfficeAndMap />
      <SiteFooter />
    </>
  );
}
