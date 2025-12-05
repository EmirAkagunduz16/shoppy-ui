import React from "react";

interface SingleProductProps {
  params: {
    productId: string;
  };
}

const SingleProduct = ({ params }: SingleProductProps) => {
  return <div>SingleProduct {params.productId}</div>;
};

export default SingleProduct;
