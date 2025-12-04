import { Grid } from "@mui/material";
import getProducts from "./actions/get-product";
import Product from "./product";

export default async function Products() {
  const products = await getProducts();

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} size={{ sm: 12, md: 6, lg: 4 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
