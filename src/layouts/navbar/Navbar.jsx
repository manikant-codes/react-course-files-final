import React from "react";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Pokédex</h1>
    </nav>
  );
}

export default Navbar;
