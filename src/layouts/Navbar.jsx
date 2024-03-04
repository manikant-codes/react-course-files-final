import React, { useState } from "react";
import "../styles/layouts/navbar.module.css";
import styles from "../styles/layouts/navbar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleMenu() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className={styles.container}>
      <div>
        <h1>Logo</h1>
      </div>
      <ul
        className={`${styles.links} ${
          isExpanded ? styles.expanded : styles.collapsed
        }`}
      >
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/work">Work</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button className={styles.menuBtn} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default Navbar;
