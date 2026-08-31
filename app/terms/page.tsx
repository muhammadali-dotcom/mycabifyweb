import type { Metadata } from "next";
import { LegalPage } from "../_components/LegalPage";
import { legal } from "../_data/legal";

const title = "Terms & Conditions | MyCabify";
const description =
  "Read the terms and conditions for using MyCabify's taxi dispatch software and services.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/terms" },
  twitter: { title, description },
};

export default function Page() {
  return <LegalPage data={legal.terms} />;
}
