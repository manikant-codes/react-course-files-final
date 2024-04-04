import React from "react";
import {
  capitalizeStr,
  getPokemonNumber,
} from "../../helpers/pokemonCardHelper";
import styles from "../../styles/pokemonDetails/title.module.css";

function Title(props) {
  const { name, number } = props;
  return (
    <div className={styles.container}>
      <p className={styles.name}>{capitalizeStr(name)}</p>
      <p className={styles.number}>{getPokemonNumber(number)}</p>
    </div>
  );
}

export default Title;
