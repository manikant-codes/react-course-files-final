import React from "react";
import styles from "../../styles/home/hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      <img src="/images/05.jpg" alt="" />
      <div className={styles.contentContainer}>
        <h2>
          Transform Your Beauty Routine with Radiant, Confidence-Boosting
          Cosmetics
        </h2>
        <p>
          Welcome to our cosmetic site! Discover high-quality, cruelty-free
          makeup & skincare. Join our community! 💄✨
        </p>
        <button>Get In Touch</button>
      </div>
    </div>
  );
}

export default Hero;
