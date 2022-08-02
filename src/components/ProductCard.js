import React from "react";
import '../styling/ProductCard.css'
export const ProductCard = ({ image, name, price, description}) => {
  return (
    <div className="product-block">
      <div>
        <img className="figure-01"
          src={image}
          alt="bottle"
        />
      </div>
      <div className='image-des'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>Price: <strong>{`$${price}`}</strong></p>
      </div>
    </div>



  );
};
