import React from "react";
import "../styling/Products.css";
import { ProductsImage } from "./ProductsImage";
import { getData } from "../Apis/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getReview } from "../Apis/ReviewsApi";

export const Products = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useQuery(
    ["product", id],
    getData
  );

  const { data:review } = useQuery(["reviews", id], getReview);

  // console.log(data);
  if (isLoading) {

    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error:{error.message}</h2>;
  }

  // console.log(data)

  const productData = data.data;

  // console.log(review);

  return (
    <>
      <ProductsImage data={productData} review={review} keys={["reviews", id]} />
    </>
  );
};
