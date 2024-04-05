import React from "react";
import styles from "./pokemonCard.module.css";
import { capitalizeStr, getPokemonImage, getPokemonNumber } from "./cardHelper";
import Tag from "./tag/Tag";
import { useNavigate } from "react-router-dom";

function PokemonCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`pokemonDetails/${pokemon.name}`);
  }

  return (
    <div className={styles.container} onClick={goToDetails}>
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
