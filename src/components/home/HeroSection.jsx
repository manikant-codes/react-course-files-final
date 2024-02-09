import React from "react";
import styles from "../../styles/home/heroSection.module.css";

function HeroSection() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.overlay} />
        <img
          className={styles.heroImage}
          src="https://images.unsplash.com/photo-1682687220015-186f63b8850a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hero"
        />
        <div className={styles.textContainer}>
          <h2>Welcome to our website</h2>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
