import React from "react";
import styles from "../../styles/home/searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchSearchedPokemon } from "../../services/apiServices";

function Searchbar(props) {
  const { query, setQuery, setSearchedPokemon } = props;

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearchedPokemon(null);
    }
  }

  function handleSearch() {
    fetchSearchedPokemon(query).then((data) => {
      setSearchedPokemon(data);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
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
    </div>
  );
}

export default Searchbar;
