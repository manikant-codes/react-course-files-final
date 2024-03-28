import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";

function PokemonCard() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.number}>#1</p>
        <p className={styles.name}>Bulbasaur</p>
      </div>
    </div>
  );
}

export default PokemonCard;
