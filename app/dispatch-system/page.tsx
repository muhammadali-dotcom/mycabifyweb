import { ProductDetailPage } from "../_components/ProductDetailPage";
import { products } from "../_data/products";

export default function Page() {
  return <ProductDetailPage data={products["dispatch-system"]} slug={products["dispatch-system"].slug} />;
}
