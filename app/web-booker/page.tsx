import { ProductDetailPage } from "../_components/ProductDetailPage";
import { products } from "../_data/products";

export default function Page() {
  return <ProductDetailPage data={products["web-booker"]} slug={products["web-booker"].slug} />;
}
