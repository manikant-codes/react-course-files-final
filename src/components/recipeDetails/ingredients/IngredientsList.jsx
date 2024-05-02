import React from "react";
import IngredientsListItem from "./IngredientsListItem";
import styles from "../../../styles/recipeDetails/ingredients.module.css";

function IngredientsList({ ingredients }) {
  return (
    <div className={styles.containerIngredientsList}>
      {ingredients.map((value) => {
        return <IngredientsListItem ingredient={value} />;
      })}
    </div>
  );
}

export default IngredientsList;
