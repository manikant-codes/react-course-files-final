import React from "react";
import styles from "../../styles/home/hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  function handleClick(msg, e) {
    console.log(e);
    alert(msg);
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} src="/images/hero.jpg" alt="Hero" />
      </div>
      <div className={styles.heroContentContainer}>
        <h2 className={styles.heroTitle}>Welcome to Purple Bit</h2>
        <p className={styles.heroDesc}>
          Purple Bit - a leading tech firm 🚀 delivering innovative solutions
          for businesses 💼 of all sizes! 📈 Our team of experts 🧑‍💻 provides
          high-quality products & services, keeping you ahead in the rapidly
          changing digital landscape 🌐. Let us unlock your business's full
          potential with customized tech solutions 💡.
        </p>
        <button
          className={styles.heroBtn}
          onClick={function (e) {
            handleClick("Message", e);
          }}
        >
          Know More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
