import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../styles/layouts/searchbar.module.css";

function Searchbar() {
  return (
    <div className={styles.searchContainer}>
      <input type="text" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
