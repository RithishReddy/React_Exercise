import React from "react";
import { Link } from "react-router-dom";
import "../styling/Home.css";
import { ProductCard } from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../Apis/ProductApi";

export const Home = () => {
   
  const { isLoading, isError, error, data } = useQuery(
    ["product-list"],
    fetchProducts
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <section className="head">
        <h1>Products</h1>
        <Link className="create-product" to="#">
          Create Product
        </Link>
        
      </section>
      <section className="products-image">
        { data?.data.map(product=> (
          <Link className='prod' to={`products/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </Link>
        ))}
          { data?.data.map(product=> (
          <Link className='prod' to={`products/${product.id}`} key={product.id}>
            <ProductCard
              image={product.image}
              name={product.name}
              price={product.price}
              description={product.description}
            />
          </Link>
        ))}
      </section>
    </>
  );
};
