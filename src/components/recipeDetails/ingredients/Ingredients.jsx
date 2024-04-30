import React from "react";
import IngredientsList from "./IngredientsList";
import styles from "../../../styles/recipeDetails/ingredients.module.css";

function Ingredients() {
  return (
    <div className={styles.containerIngredients}>
      <div className={styles.containerTitleMain}>
        <h2>Ingredients</h2>
      </div>
      <IngredientsList />
    </div>
  );
}

export default Ingredients;
