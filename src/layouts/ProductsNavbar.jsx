import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layouts/productsNavbar.module.css";

function ProductsNavbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/products/compacts">Compacts</Link>
        </li>
        <li>
          <Link to="/products/blushers">Blushers</Link>
        </li>
        <li>
          <Link to="/products/foundations">Foundations</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProductsNavbar;
