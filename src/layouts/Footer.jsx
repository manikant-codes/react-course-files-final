import React from "react";
import styles from "../styles/layout/footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div>
        <p>&copy; Copyright 2024. All rights reserved.</p>
      </div>
      <div>
        <ul className={styles.ulStyles}>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
