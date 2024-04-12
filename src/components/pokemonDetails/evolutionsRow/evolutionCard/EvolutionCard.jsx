import React from "react";
import Tag from "../../../home/pokemonsList/pokemonCard/tag/Tag";
import styles from "./evolutionCard.module.css";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../home/pokemonsList/pokemonCard/cardHelper";

function EvolutionCard(props) {
  const { pokemon } = props;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.nameNumberContainer}>
        <p>{capitalizeStr(pokemon.name)}</p>
        <p>{getPokemonNumber(pokemon.id)}</p>
      </div>
      <div className={styles.tagsContainer}>
        {pokemon.types.map((value, index) => {
          return <Tag key={index} type={value.type.name} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionCard;
