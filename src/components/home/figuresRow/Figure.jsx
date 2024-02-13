import React from "react";
import styles from "../../../styles/home/figuresRow.module.css";
import CountUp from "react-countup";

function Figure(props) {
  return (
    <div className={styles.figureContainer}>
      <h2>
        <CountUp end={props.figure} />+
      </h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Figure;
