import React from "react";
import styles from "../../styles/home/heroSection.module.css";

function HeroSection() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.overlay} />
        <img className={styles.heroImage} src="/images/07.jpg" alt="hero" />
        <div className={styles.textContainer}>
          <h2>Welcome to our website</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
