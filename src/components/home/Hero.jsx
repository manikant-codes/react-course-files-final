import React from "react";
import styles from "../../styles/home/hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero(props) {
  const { image, title, desc } = props;
  function handleClick(msg, e) {
    console.log(e);
    alert(msg);
  }

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImageContainer}>
        <img className={styles.heroImage} src={image} alt="Hero" />
      </div>
      <div className={styles.heroContentContainer}>
        <h2 className={styles.heroTitle}>{title}</h2>
        <p className={styles.heroDesc}>{desc}</p>
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
