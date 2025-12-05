import { Grid, Typography } from "@mui/material";
import getProducts from "./actions/get-product";
import Product from "./product";

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

  return (
    <Grid container spacing={3} sx={{ height: "85vh", overflowY: "scroll" }}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
