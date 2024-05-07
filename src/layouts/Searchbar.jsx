import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../styles/layouts/searchbar.module.css";
import { getSearchedRecipies } from "../services/apiServices";

function Searchbar({ setRecipes }) {
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    getSearchedRecipies(query).then((data) => {
      setRecipes(data.results);
    });
  }

  return (
    <div className={styles.searchContainer}>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
