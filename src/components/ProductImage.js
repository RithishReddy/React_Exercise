import React from "react";
import '../styling/ProductImage.css'
export const ProductImage = () => {
  return (
    <div className="product-block">
      <div>
        <img className="figure-01"
          src="https://image.shutterstock.com/image-photo/stylish-stainless-thermo-bottles-on-260nw-1914561409.jpg"
          alt="bottle"
        />
      </div>
      <div className='image-des'>
        <h2>Bottle</h2>
        <p>Bottle Description</p>
        <p>Price : <strong>$ 310</strong></p>
      </div>
    </div>
  );
};
