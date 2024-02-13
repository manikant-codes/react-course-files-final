import React from "react";
// import "../styles/home/navbar.css";
import styles from "../styles/layout/navbar.module.css";

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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
