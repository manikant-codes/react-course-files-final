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
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            {/* <a href="/about">About</a> */}
            <Link to="/about">About</Link>
          </li>
          <li>
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
