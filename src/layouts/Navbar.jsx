import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/layouts/navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function toggleMenu() {
    setIsVisible(!isVisible);
  }

  return (
    <nav className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <ul className={`${styles.links} ${isVisible ? styles.visible : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/products">Products</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className={styles.menuBtn} onClick={toggleMenu}>
        {isVisible ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
