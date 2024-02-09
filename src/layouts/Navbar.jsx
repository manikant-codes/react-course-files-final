import React from "react";
import styles from "../styles/layouts/navbar.module.css";
// import "../styles/layouts/navbar.module.css";

function Navbar() {
  console.log("styles", styles);
  return (
    <nav className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className={styles.innerContainer}>
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
