import React from "react";
import styles from "../../../styles/home/carousel.module.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </button>
  );
}

export { NextArrow, PrevArrow };
