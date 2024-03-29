import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import Tag from "./Tag";

function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="Bulbasaur"
        />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.pokemonNumber}>#{pokemon.id}</p>
        <p className={styles.pokemonName}>{pokemon.name}</p>
        {pokemon.types.map((type) => {
          return <Tag type={type.type.name} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
