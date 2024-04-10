import React from "react";
import styles from "../../../styles/pokemonDetails/evolutionsRow.module.css";
import Tag from "../../home/pokemonsList/Tag";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokedexHelper";

function EvolutionCard({ pokemon }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.nameNumber}>
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
