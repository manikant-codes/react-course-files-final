import React from "react";
import styles from "../../styles/home/hero.module.css";

function Hero(props) {
  const { src, title, desc } = props;
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <img src={src} alt="" />
      <div className={styles.contentContainer}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <button>Get In Touch</button>
      </div>
    </div>
  );
}

export default Hero;
