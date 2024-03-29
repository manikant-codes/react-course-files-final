import React from "react";
import styles from "../../../styles/home/pokemonsList.module.css";

function Tag(props) {
  const { type } = props;
  const typeClassName = `type-${type.toLowerCase()}`;

  // console.log("styles", styles, styles["type-fire"]);

  return <div className={`${styles.tag} ${styles[typeClassName]}`}>{type}</div>;
}

export default Tag;
