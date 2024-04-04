import React from "react";
import PokemonCard from "../pokemonsList/pokemonCard/PokemonCard";
import styles from "./searchedPokemon.module.css";

function SearchedPokemon(props) {
  const { pokemon, setSearchedPokemon, setQuery } = props;

  function handleGoBack() {
    setSearchedPokemon(null);
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
