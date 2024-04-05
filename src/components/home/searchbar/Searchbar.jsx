import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./searchbar.module.css";
import { getSinglePokemon } from "../../../services/apiServices";

function Searchbar(props) {
  const { query, setQuery, setSearchedPokemon } = props;

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearchedPokemon(null);
    }
  }

  function handleSearch() {
    getSinglePokemon(query).then((data) => {
      setSearchedPokemon(data);
    });
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.searchInput}
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
