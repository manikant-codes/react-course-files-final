import React from "react";
import Title from "../../common/Title";
import styles from "../../../styles/home/figuresRow.module.css";
import Figure from "./Figure";

function FiguresRow() {
  return (
    <div className={styles.container}>
      <Title
        title="Our Journey So Far"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, consequatur?"
      />
      <div className={styles.innerContainer}>
        <Figure figure={100} desc="Lorem ipsum dolor sit amet." />
        <Figure figure={200} desc="Lorem ipsum dolor sit amet." />
        <Figure figure={300} desc="Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
}

export default FiguresRow;
