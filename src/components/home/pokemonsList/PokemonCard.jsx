import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import Tag from "./Tag";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokemonHelper";
import { useNavigate } from "react-router-dom";

function PokemonCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`pokemonDetails/${pokemon.name}`);
  }

  return (
    <div className={styles.cardContainer} onClick={goToDetails}>
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
