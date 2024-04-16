import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="navContainer">
      <h1 className="logo">Purple Bit</h1>
      <ul className={`links ${isOpen ? "open" : ""}`}>
        <li onClick={toggleOpen}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleOpen}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={toggleOpen}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li onClick={toggleOpen}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className="btnMenu" onClick={toggleOpen}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default Navbar;
