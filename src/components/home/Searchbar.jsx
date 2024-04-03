import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { getSearchedPokemon } from "../../services/apiServices";
import styles from "../../styles/home/searchbar.module.css";

function Searchbar(props) {
  const { query, setQuery, setSearched } = props;

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearched(null);
    }
  }

  function handleSearch() {
    getSearchedPokemon(query).then((data) => {
      setSearched(data);
    });
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        placeholder="Name or Number"
        onChange={handleChange}
        value={query}
      />
      <button className={styles.searchBtn} onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default Searchbar;
