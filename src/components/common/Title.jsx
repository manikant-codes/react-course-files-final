import React from "react";
import styles from "../../styles/common/title.module.css";

function Title(props) {
  return (
    <div className={styles.titleContainer}>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
