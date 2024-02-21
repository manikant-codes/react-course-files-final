import React from "react";
// import "../styles/home/navbar.css";
import styles from "../styles/layout/navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  console.log("styles", styles.container);
  // const navStyles = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   padding: "16px 32px",
  //   backgroundColor: "#03a9f4",
  //   alignItems: "center",
  // };

  // const ulStyles = {
  //   listStyleType: "none",
  //   display: "flex",
  //   gap: "16px",
  //   margin: "0px",
  // };

  return (
    <nav className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
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
            {/* <a href="/contact">Contact</a> */}
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
