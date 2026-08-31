import type { Metadata } from "next";
import { ProductDetailPage } from "../_components/ProductDetailPage";
import { products } from "../_data/products";

const data = products["driver-app"];

export const metadata: Metadata = {
  title: `${data.title} | MyCabify`,
  description: data.intro,
  openGraph: { title: data.title, description: data.intro, url: `/${data.slug}` },
  twitter: { title: data.title, description: data.intro },
};

export default function Page() {
  return <ProductDetailPage data={data} slug={data.slug} />;
}
