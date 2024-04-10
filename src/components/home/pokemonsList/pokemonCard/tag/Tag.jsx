import React from "react";
import styles from "./tag.module.css";
import { getContrastYIQ } from "../../../../../helpers/pokedexHelpers";

function Tag(props) {
  const { type } = props;
  const typeClassName = `type-${type.toLowerCase()}`;

  const colors = {
    normal: "#a0a29f",

    fire: "#f08030",

    water: "#6890f0",

    electric: "#f8d030",

    grass: "#78c850",

    ice: "#98d8d8",

    fighting: "#c03028",

    poison: "#a040a0",

    ground: "#e0c050",

    flying: "#a890f0",

    psychic: "#f8a070",

    bug: "#a0c030",

    rock: "#b8a038",

    ghost: "#705898",

    dragon: "#7038f8",

    dark: "#703040",

    steel: "#b8b8d0",

    fairy: "#f0b6bc",
  };

  return (
    <div
      className={`${styles.tag}`}
      style={{
        backgroundColor: colors[type],
        color: getContrastYIQ(colors[type]),
      }}
    >
      {type}
    </div>
  );
}

export default Tag;
