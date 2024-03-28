import React from "react";
import styles from "../styles/layouts/navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>Pokédex</h1>
    </nav>
  );
}

export default Navbar;
