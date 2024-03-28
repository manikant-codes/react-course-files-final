import React from "react";
import styles from "../styles/layout/navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>Pokédex</h1>
    </div>
  );
}

export default Navbar;
