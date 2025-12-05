import { get } from "@/app/common/utils/fetch";
import { Product } from "../interfaces/products.interface";

export default async function getProduct(productId: number) {
  return get<Product>(`products/${productId}`);
}
