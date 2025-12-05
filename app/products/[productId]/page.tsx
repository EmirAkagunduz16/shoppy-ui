import React from "react";
import getProduct from "./get-product";
import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { getProductImage } from "../product-image";
import Checkout from "@/app/checkout/checkout";

interface SingleProductProps {
  params: Promise<{
    productId: string;
  }>;
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const { productId } = await params;
  const product = await getProduct(+productId);
  return (
    <Grid container marginBottom={"2rem"} rowGap={3}>
      {product.imageExists && (
        <Grid size={{ md: 6, xs: 12 }}>
          <Image
            src={getProductImage(product.id)}
            alt="Product image"
            width={0}
            height={0}
            className="w-full sm:w-3/4 md:w-1/2"
            sizes="100vw"
          />
        </Grid>
      )}

      <Grid size={{ md: 6, xs: 12 }}>
        <Stack gap={3}>
          <Typography variant="h2">{product.name}</Typography>

          <Typography>{product.description}</Typography>
          <Typography variant="h4">${product.price}</Typography>
          <Checkout productId={product.id} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SingleProduct;
