import React from "react";
import PokemonCard from "./pokemonCard/PokemonCard";
import styles from "./pokemonsList.module.css";

function PokemonsList() {
  return (
    <div className={styles.container}>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
}

export default PokemonsList;
