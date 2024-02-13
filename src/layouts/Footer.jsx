import React from "react";
import styles from "../styles/layouts/footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div>
        <p>&copy; Copyright 2024. All rights reserved.</p>
      </div>
      <ul className={styles.links}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
