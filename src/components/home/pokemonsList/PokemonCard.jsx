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
      <div className={styles.imageContainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <p className={styles.number}>{getPokemonNumber(pokemon.id)}</p>
        <p className={styles.name}>{capitalizeStr(pokemon.name)}</p>
        <div>
          {pokemon.types.map((value, index) => {
            return <Tag key={index} type={value.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
