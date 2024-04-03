import React from "react";
import PokemonCard from "./pokemonsList/PokemonCard";
import styles from "../../styles/home/searchedPokemon.module.css";

function SearchedPokemon(props) {
  const { pokemon, setQuery, setSearched } = props;

  function handleGoBack() {
    setSearched(null);
    setQuery("");
  }

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <PokemonCard pokemon={pokemon} />
      </div>
      <button className={styles.goBackBtn} onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default SearchedPokemon;
