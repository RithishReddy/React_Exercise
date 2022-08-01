import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";
import { ProductImage } from "./ProductImage";

export const Home = () => {
  return (
    <>
      <section className="head">
        <h1>Products</h1>
        <Link className="create-product" to="#">Create Product</Link>
      </section>
      <section className="product-image">
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
       <ProductImage />
      </section>
    </>
  );
};
