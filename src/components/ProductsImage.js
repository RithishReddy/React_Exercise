import React from "react";
import { Link } from "react-router-dom";
import "../styling/ProductsImage.css";
export const ProductsImage = ({data}) => {
  return (
    <div className="product-section">
      <div className="product-image">
        <img src={data.image} alt="bottle" />
      </div>
      <div className="image-description">
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <p>Quantity :{data.quantity}</p>
        <p>
          Price : <strong>${data.price}</strong>
        </p>
        <div className="top-margin">
          <Link to="#" className="addtocart">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
