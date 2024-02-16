import React from "react";
import styles from "../../../styles/home/progressRow.module.css";

function ProgressBar(props) {
  return (
    <div className={styles.progressBarContainer}>
      <p>{props.title}</p>
      <div className={styles.progressBar}>
        <div
          className={styles.progressBarValue}
          style={{ width: `${props.width}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
