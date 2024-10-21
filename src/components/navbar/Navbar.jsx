import React from "react";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ul className="topUL">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <p>Categories</p>
        <ul className="bottomUL">
          <li onClick={() => navigate("/categories", { category: "business" })}>
            Business
          </li>
          <li onClick={() => navigate("/categories", { category: "general" })}>
            General
          </li>
          <li onClick={() => navigate("/categories", { category: "health" })}>
            Health
          </li>
          <li onClick={() => navigate("/categories", { category: "science" })}>
            Science
          </li>
          <li onClick={() => navigate("/categories", { category: "sports" })}>
            Sports
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Navbar;
