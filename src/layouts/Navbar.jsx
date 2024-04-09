import React from "react";
import "../styles/home/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navContainer">
      <h1 className="logo">Purple Bit</h1>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
