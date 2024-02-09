import React from "react";
import "../styles/layouts/navbar.css";
import styles from "../styles/layouts/navbar.module.css";

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

  console.log("styles", styles);

  return (
    <div className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className={styles.ulStyles}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
