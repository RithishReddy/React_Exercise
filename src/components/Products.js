import React from "react";
import "../styling/Products.css";
import { ProductsImage } from "./ProductsImage";
import { getData } from "../Apis/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Products = () => {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useQuery(
    ["product", id],
    getData
  );
  // console.log(data);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error:{error.message}</h2>;
  }

  const productData = data.data;

  return (
    <>
      <ProductsImage data={productData} />
    </>
  );
};
