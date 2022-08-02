import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="nav1">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products/1">Products</NavLink>
    </nav>
  );
};
