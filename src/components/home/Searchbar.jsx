import React from "react";
import styles from "../../styles/home/searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <input
          type="text"
          className={styles.input}
          placeholder="Name or Number"
        />
        <button className={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
}

export default Searchbar;
