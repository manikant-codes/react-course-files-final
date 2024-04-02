import React from "react";
import styles from "./pokemonCard.module.css";
import { getPokemonNumber } from "./cardHelper";
import Tag from "./tag/Tag";

function PokemonCard() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/156.png"
          alt=""
        />
      </div>
      <div className={styles.infoContainer}>
        <p>{getPokemonNumber(1010)}</p>
        <p className={styles.name}>Quilava</p>
        <Tag type="fire" />
      </div>
    </div>
  );
}

export default PokemonCard;
