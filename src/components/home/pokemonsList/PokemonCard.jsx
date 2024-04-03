import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import Tag from "./Tag";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokemonCardHelper";

function PokemonCard(props) {
  const { pokemon } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.pokemonNumber}>{getPokemonNumber(pokemon.id)}</p>
        <p className={styles.pokemonName}>{capitalizeStr(pokemon.name)}</p>
        {pokemon.types.map((type) => {
          return <Tag type={type.type.name} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
