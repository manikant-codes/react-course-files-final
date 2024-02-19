import React from "react";
import styles from "../../../styles/home/progressRow.module.css";

function ProgressBar(props) {
  return (
    <div className={styles.progressBarContainerOuter}>
      <p>
        <span>{props.title}</span>
        <span>{props.value}%</span>
      </p>
      <div className={styles.progressBarContainerInner}>
        <div style={{ width: `${props.value}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
