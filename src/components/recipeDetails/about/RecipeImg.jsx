import React from "react";
import styles from "../../../styles/recipeDetails/about.module.css";

function RecipeImg({ img }) {
  return (
    <div className={styles.containerRecipeImg}>
      <img src={img} alt="" />
    </div>
  );
}

export default RecipeImg;
