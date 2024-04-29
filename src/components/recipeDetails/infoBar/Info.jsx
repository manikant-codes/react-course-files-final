import React from "react";
import styles from "../../../styles/recipeDetails/info.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faStopwatch } from "@fortawesome/free-solid-svg-icons";

function Info({ title, number }) {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerInfo}>
        <p className={styles.title}>{title}</p>
        <FontAwesomeIcon
          className={styles.clock}
          icon={faStopwatch}
          fontSize={"1.5rem"}
          color="rgba(255, 255, 255, 0.75)"
        />
        <div className={styles.numberContainer}>
          <p className={styles.number}>{number}</p>
          <p className={styles.min}>min</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
