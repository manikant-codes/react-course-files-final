import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import Searchbar from "./Searchbar";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="./images/logo.png" alt="" />
        <h1>Khana Khajana</h1>
      </div>
      <Searchbar />
      <div />
    </nav>
  );
}

export default Navbar;
