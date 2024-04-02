import React from "react";
import styles from "../../../styles/home/tag.module.css";

function Tag(props) {
  const { type } = props;
  const typeClassName = `type-${type.toLowerCase()}`;
  // styles["type-grass"]
  return <div className={`${styles.tag} ${styles[typeClassName]}`}>{type}</div>;
}

export default Tag;
