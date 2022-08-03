import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useCart } from "../store/Cart";
import "../styling/ProductsImage.css";
export const ProductsImage = ({ data }) => {
  const { id, name, image, price, quantity, description, variants } = data;
  // const [count, setCount] = useState(0);
  const [img, setimg] = useState("");
  const [cart, setCart] = useCart();
  const [quant, setQuant] = useState(0);
  //Check with teja on how to move this to recoil file
  // console.log(cart);

  useEffect(() => {
    if (data) {
      setimg(image);
    }
  }, [data]);

  useEffect(() => {
    isNaN(cart[id])?setQuant(quantity-0):setQuant(quantity-cart[id])
  }, []);

  const removeFromCart = () => {
    const copy = { ...cart };
    if (copy[id] === 1) {
      delete copy[id];
      setCart(copy);
    } else {
      setCart({ ...copy, [id]: copy[id] - 1 });
    }
    setQuant(quant + 1);
  };
  const addToCart = () => {
    setCart({ ...cart, [id]: (cart[id] || 0) + 1 });
    setQuant(quant - 1);
  };

  return (
    <div className="product-section">
      <div className="product-image">
        <img src={img} alt="bottle" />
      </div>
      <div className="image-description">
        <h2>{name}</h2>
        <p>{description}</p>

        <p>
          Price : <strong>${price}</strong>
        </p>
        {/* <p>{quant}</p> */}
        <p>
          {quantity > 10
            ? `Available`
            : quantity <= 10
            ? "Selling Fast"
            : "Un available"}
        </p>
        {console.log(cart)}

        <div className="variant-image">
          {variants.map((variant) => {
            return (
              <button
                key={variant.color}
                className="var-button"
                style={{ backgroundColor: variant.color }}
                onClick={() => {
                  setimg(variant.image);
                }}
              ></button>
            );
          })}
        </div>

        {quant === quantity ? (
          <div className="top-margin">
            <Link to="#" className="addtocart" onClick={addToCart}>
              Add to Cart
            </Link>
          </div>
        ) : (
          <div className="buttons">
            <button
              className="decrement button"
              disabled={quant === quantity ? true : false}
              onClick={removeFromCart}
            >
              -
            </button>
            {cart[id]}
            <button
              className="increment button"
              disabled={quant === 0 ? true : false}
              onClick={addToCart}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
