import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import PokemonCard from "./PokemonCard";

function PokemonsList() {
  return (
    <div className={styles.listContainer}>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </div>
  );
}

export default PokemonsList;
