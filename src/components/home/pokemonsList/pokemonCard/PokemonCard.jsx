import React from "react";
import styles from "./pokemonCard.module.css";
import { capitalizeStr, getPokemonImage, getPokemonNumber } from "./cardHelper";
import Tag from "./tag/Tag";

function PokemonCard(props) {
  const { pokemon } = props;
  console.log("pokemon", pokemon);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.infoContainer}>
        <p>{getPokemonNumber(pokemon.id)}</p>
        <p className={styles.name}>{capitalizeStr(pokemon.name)}</p>
        <div>
          {pokemon.types.map((value) => {
            return <Tag type={value.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
