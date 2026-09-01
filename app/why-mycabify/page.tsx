import type { Metadata } from "next";
import { BasicPage } from "../_components/BasicPage";
import { basics } from "../_data/basics";

const title = "Why MyCabify | Minicab Dispatch Software";
const description =
  "See what makes MyCabify the right choice for UK minicab operators: simpler bookings, dispatch, drivers and payments in one system.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url: "/why-mycabify" },
  twitter: { title, description },
};

export default function Page() {
  return <BasicPage data={basics["why-mycabify"]} slug="why-mycabify" />;
}
