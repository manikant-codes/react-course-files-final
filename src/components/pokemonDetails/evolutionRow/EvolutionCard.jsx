import React from "react";
import styles from "../../../styles/pokemonDetails/evolutionCard.module.css";

import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokedexHelpers";
import { useNavigate } from "react-router-dom";
import Tag from "../../home/pokemonsList/Tag";

function EvolutionCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/pokemonDetails/${pokemon.name}`);
  }

  return (
    <div className={styles.cardContainer} onClick={goToDetails}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.nameNumber}>
          <p className={styles.pokemonName}>{capitalizeStr(pokemon.name)}</p>
          <p className={styles.pokemonNumber}>{getPokemonNumber(pokemon.id)}</p>
        </div>
        <div className={styles.tagsContainer}>
          {pokemon.types.map((type) => {
            return <Tag type={type.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EvolutionCard;
