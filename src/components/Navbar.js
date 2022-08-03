import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../store/Cart";
import { ShoppingCart } from "./ShoppingCart";

export const Navbar = () => {
  const [cart, setCart] = useCart();
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(prevState=>!prevState)
  };

  return (
    <div className="nav-bar">
      <nav className="nav1">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products/1">Products</NavLink>
      </nav>
    {console.log(cart)}
      <div className="cart-button">
        <button onClick={handleClick}>Cart  ({Object.keys(cart).length})</button>
      </div>
      <div className="cart-page">
        {Object.keys(cart).map((id) => (
          visible && <ShoppingCart key={id} value={id} />
        ))}
      </div>
    </div>
  );
};
