"use server";

import { get } from "@/app/common/utils/fetch";
import { Product } from "../interfaces/products.interface";

export default async function getProducts() {
  return get<Product[]>("products");
}
