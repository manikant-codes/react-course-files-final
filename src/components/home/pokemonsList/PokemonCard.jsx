import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import Tag from "./Tag";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumber,
} from "../../../helpers/pokemonHelper";
import { useNavigate } from "react-router";

function PokemonCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`pokemonDetails/${pokemon.id}`);
  }

  return (
    <div className={styles.cardContainer} onClick={goToDetails}>
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
