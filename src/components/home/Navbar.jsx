import React from "react";
import "../../styles/home/navbar.css";

function Navbar() {
  return (
    <nav className="navContainer">
      <h1 className="logo">Purple Bit</h1>
      <ul className="links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Services</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
