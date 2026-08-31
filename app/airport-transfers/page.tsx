import type { Metadata } from "next";
import { SolutionDetailPage } from "../_components/SolutionDetailPage";
import { solutions } from "../_data/solutions";

const data = solutions["airport-transfers"];

export const metadata: Metadata = {
  title: `${data.title} | MyCabify`,
  description: data.intro,
  openGraph: {
    title: data.title,
    description: data.intro,
    url: "/airport-transfers",
    ...(data.heroImage ? { images: [{ url: data.heroImage }] } : {}),
  },
  twitter: { title: data.title, description: data.intro },
};

export default function Page() {
  return <SolutionDetailPage data={data} />;
}
