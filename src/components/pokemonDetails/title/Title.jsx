import React from "react";
import styles from "./title.module.css";
import {
  capitalizeStr,
  getPokemonNumber,
} from "../../home/pokemonsList/pokemonCard/cardHelper";

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
