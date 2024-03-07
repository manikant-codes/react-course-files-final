import React from "react";
import styles from "../../../styles/home/counterRow.module.css";
import Title from "../../common/Title";
import Counter from "./Counter";

function CounterRow() {
  return (
    <div className={styles.rowContainer}>
      <Title
        title="Our Journey"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, odio!"
      />
      <div className={styles.counterContainer}>
        <Counter number={100} desc="Lorem ipsum dolor sit amet." />
        <Counter number={200} desc="Lorem ipsum dolor sit amet." />
        <Counter number={300} desc="Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
}

export default CounterRow;
