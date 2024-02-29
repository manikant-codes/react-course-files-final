import React from "react";
import "../styles/layouts/navbar.module.css";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  //   const container = {
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "space-between",
  //     padding: "8px 32px",
  //     backgroundColor: "#00695c",
  //     color: "white",
  //   };

  //   const ulStyles = {
  //     display: "flex",
  //     listStyleType: "none",
  //     gap: "16px",
  //     margin: "0px",
  //     padding: "0px",
  //   };

  return (
    <div className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className={styles.ulStyles}>
        <li>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <Link to="/work">Work</Link>
        </li>
        <li>
          {/* <a href="/contact">Contact</a> */}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
