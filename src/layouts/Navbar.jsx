import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layouts/navbar.module.css";
// import "../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <>
      <nav className={styles.container}>
        <div>
          <h1>Logo</h1>
        </div>
        <ul className={styles.innerContainer}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
