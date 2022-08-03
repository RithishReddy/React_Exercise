import React from "react";
import { useCart } from "../store/Cart";
import { getData } from "../Apis/ProductApi";
import { useQuery } from "@tanstack/react-query";
import '../styling/ShoppingCart.css'

export const ShoppingCart = (props) => {
  const [cart] = useCart();
  const id = props.value;
  const { data, isError, error, isLoading } = useQuery(
    ["product", id],
    getData
  );
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>Error:{error.message}</h2>;
  }

  const productData = data.data;
  const {name,image,description,price,quantity}=productData
  return (
    <div className="cart-block">
      {/* {Object.keys(cart).length === 0 ? <p>No items</p> : <p>hii</p>}
      <p>{data.data.name}</p>
      <p>{cart[id]}</p> */}

      <div className="cart-image">
        <img src={image} alt={description} />

      </div>
      <div className="cart-description" >
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Quantity :{cart[id]}</p>
        <p>
          Price : <strong>${price*cart[id]}</strong>
        </p>
      </div>
      




    </div>
  );
};



