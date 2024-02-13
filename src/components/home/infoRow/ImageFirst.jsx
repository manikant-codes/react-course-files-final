import React from "react";
import styles from "../../../styles/home/infoRow.module.css";

function ImageFirst(props) {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.imgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.descContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button>Know More</button>
      </div>
    </div>
  );
}

export default ImageFirst;
