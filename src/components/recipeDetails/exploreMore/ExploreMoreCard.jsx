import React from "react";
import styles from "../../../styles/recipeDetails/exploreMore.module.css";

function ExploreMoreCard({ src, title }) {
  return (
    <div className={styles.containerExploreMoreCard}>
      <div className={styles.overlay} />
      <img src={src} alt="" className={styles.imgExploreMoreCard} />
      <h3 className={styles.titleExploreMoreCard}>
        Keto <span>{title}</span>
        <br />
        Recipes
      </h3>
    </div>
  );
}

export default ExploreMoreCard;
