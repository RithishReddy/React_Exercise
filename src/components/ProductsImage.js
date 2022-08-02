import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "../styling/ProductsImage.css";
export const ProductsImage = ({ data }) => {
  const { name, image, price, quantity, description, variants } = data;
  const [img, setimg] = useState();
  // const onHandleChange = (e) => {
  //   e.preventDefault();
  //   e.setimg(variant.image);
  // }

  useEffect(() => {
    
    if(data)
    setimg(image)
    
    },
  [data])
  
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
        <p>
          {quantity > 10
            ? `Available`
            : quantity <= 10
            ? "Selling Fast"
            : "Un available"}
        </p>

        <div className="variant-image">
          {variants.map((variant) => {
          return(
            <button
              className="var-button"
              style={{ backgroundColor: variant.color }}
              onClick={() => {
                setimg(variant.image);
              }}
            >
        
            </button>)
          })}
        </div>

        <div className="top-margin">
          <Link to="#" className="addtocart">
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
