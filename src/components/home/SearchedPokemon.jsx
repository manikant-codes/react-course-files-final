import React from "react";
import styles from "../../styles/home/searchedPokemon.module.css";
import PokemonCard from "./pokemonsList/PokemonCard";

function SearchedPokemon(props) {
  const { pokemon, setQuery, setSearchedPokemon } = props;

  function handleGoBack() {
    setQuery("");
    setSearchedPokemon(null);
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
