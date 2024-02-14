import React from "react";
import styles from "../../../styles/home/counterRow.module.css";
import Title from "../../common/Title";
import Figure from "./Figure";

function CounterRow() {
  return (
    <div className={styles.container}>
      <Title
        title="Our Journey So Far"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, commodi!"
      />
      <div className={styles.figureContainer}>
        <Figure figure={100} desc="Lorem ipsum dolor sit amet." />
        <Figure figure={200} desc="Lorem ipsum dolor sit amet." />
        <Figure figure={300} desc="Lorem ipsum dolor sit amet." />
        <Figure figure={400} desc="Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
}

export default CounterRow;
