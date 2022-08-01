import React from "react";
import { Link } from "react-router-dom";
import '../styling/ProductsImage.css'
export const ProductsImage = () => {
  return (
    <div className="product-section">
      <div>
        <img
          src="https://image.shutterstock.com/image-photo/stylish-stainless-thermo-bottles-on-260nw-1914561409.jpg"
          alt="bottle"
        />
      </div>
      <div className='image-description'>
        <h2>Bottle</h2>
        <p>Bottle Description</p>
        <p>Price : <strong>$ 310</strong></p>
        <div className="top-margin">
        <Link to='#' className="addtocart">Add to Cart</Link>
        </div>

      </div>
    </div>
  );
};
