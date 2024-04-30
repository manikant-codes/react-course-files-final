import React from "react";
import IngredientsListItem from "./IngredientsListItem";
import styles from "../../../styles/recipeDetails/ingredients.module.css";

function IngredientsList() {
  return (
    <div className={styles.containerIngredientsList}>
      <IngredientsListItem />
      <IngredientsListItem />
      <IngredientsListItem />
    </div>
  );
}

export default IngredientsList;
