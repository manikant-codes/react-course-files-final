import React from "react";
import styles from "../../styles/home/footer.module.css";

function Footer() {
  console.log("styles", styles);
  return (
    <div className={styles.footer}>
      <p>© Copyright Purple Bit. All Rights Reserved</p>

      <ul className={styles.list}>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
