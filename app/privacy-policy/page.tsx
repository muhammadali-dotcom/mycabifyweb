import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";
import { legal } from "../_data/legal";

const title = "Privacy Policy | MyCabify";
const description =
  "Read MyCabify's privacy policy to understand how we collect, use and protect your data.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/privacy-policy" },
  twitter: { title, description },
};

export default function Page() {
  return <LegalPage data={legal["privacy-policy"]} />;
}
