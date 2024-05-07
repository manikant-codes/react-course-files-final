import React from "react";
import styles from "../styles/layouts/navbar.module.css";
import Searchbar from "./Searchbar";

function Navbar({ setRecipes }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src="./images/logo.svg" alt="" style={{ height: "50px" }} />
        <h1>Khana Khajana</h1>
      </div>
      <Searchbar setRecipes={setRecipes} />
      <div />
    </nav>
  );
}

export default Navbar;
