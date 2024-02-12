import React from "react";
import styles from "../../styles/home/card.module.css";

function Card(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={props.src} alt={props.title} />
      </div>
      <div className={styles.descContainer}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <button className={styles.btn}>Buy Now</button>
      </div>
    </div>
  );
}

export default Card;
