import React from "react";
import styles from "../../../styles/home/counterRow.module.css";
import CountUp from "react-countup";

function Counter(props) {
  const { number, desc } = props;
  return (
    <div className={styles.counter}>
      <p className={styles.number}>
        <CountUp end={number} />+
      </p>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

export default Counter;
