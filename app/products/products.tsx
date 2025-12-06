import { Typography } from "@mui/material";
import getProducts from "./actions/get-product";
import ProductsGrid from "./products-grid";

export default async function Products() {
  let products;
  try {
    products = await getProducts();
  } catch (error) {
    return (
      <Typography color="error">
        Ürünler yüklenemedi. Lütfen giriş yapın.
      </Typography>
    );
  }

  if (!Array.isArray(products)) {
    return <Typography color="error">Ürünler yüklenemedi.</Typography>;
  }

  return <ProductsGrid products={products} />;
}
