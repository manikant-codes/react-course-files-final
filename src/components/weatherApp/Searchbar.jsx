import React from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar(props) {
  const { city, handleChange, handleSearch } = props;
  return (
    <div className={styles.searchbarContainer}>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleChange}
        required={true}
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
