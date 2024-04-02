import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Name or Number"
      />
      <button className={styles.searchBtn}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
