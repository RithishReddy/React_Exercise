import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useFormik } from "formik";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { useCart } from "../store/Cart";
import "../styling/ProductsImage.css";
export const ProductsImage = ({ data, review, keys }) => {
  const queryClient = useQueryClient();
  const { id, name, image, price, quantity, description, variants } = data;
  const [img, setimg] = useState("");
  const [cart, setCart] = useCart();
  const [quant, setQuant] = useState(0);
  //Check with teja on how to move this to recoil file
  // console.log(cart);

  console.log(review.data["ratings"]);

  const mutation = useMutation((review) => {
    return axios.post(
      `https://obscure-refuge-62167.herokuapp.com/products/${id}/reviews/create`,
      review
    );
  });

  useEffect(() => {
    if (data) {
      setimg(image);
    }
  }, [data]);

  useEffect(() => {
    isNaN(cart[id]) ? setQuant(quantity - 0) : setQuant(quantity - cart[id]);
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

  const formik = useFormik({
    initialValues: {
      name: "",
      rating: "",
      review: "",
    },
    onSubmit: (values) => {
      mutation.mutate(
        {
          name: values.name,
          rating: values.rating,
          review: values.review,
        },
        {
          onSuccess: async () => {
            await queryClient.refetchQueries(["reviews", keys]);
          },
        }
      );
      values.name = "";
      values.rating = "";
      values.review = "";
    },
  });

  return (
    <div className="main-section">
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
            {quant == 0
              ? "Un available"
              : quant <= 10
              ? "Selling Fast"
              : "Available"}
          </p>
          {/* {console.log(cart)} */}

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
            <div className="add-cart">
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
          <div className="post-review">
            <h2>Create Review</h2>
            <form onSubmit={formik.handleSubmit} className="create-review-form">
              <div>
                {/* <label htmlFor="name">Name</label> */}
                <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  placeholder="Name"
                  value={formik.values.firstName}
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="rating">Rating</label> */}
                <input
                  id="rating"
                  name="rating"
                  type="number"
                  placeholder="Rating [ 0 - 5 ]"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  required
                />
              </div>
              <div>
                {/* <label htmlFor="review">Review</label> */}
                <input
                  id="review"
                  name="review"
                  type="text"
                  placeholder="Review"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  required
                />
              </div>
              <button className="review-button" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="review-section">
            <h2>Reviews</h2>
            {review.data["ratings"].map((review) => {
              return (
                <div className="review-data" key={review.id}>
                  <p>
                    <strong>Customer Name</strong>: {review.name}
                  </p>
                  <div>
                    <strong>Rating </strong>:
                    <StarRatings
                      style={{ display: "inline" }}
                      rating={review.rating}
                      starDimension="25px"
                      starSpacing="0px"
                      numberOfStars={5}
                      starRatedColor="gold"
                    />
                  </div>
                  <p>
                    <strong>Review</strong>: {review.review}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
