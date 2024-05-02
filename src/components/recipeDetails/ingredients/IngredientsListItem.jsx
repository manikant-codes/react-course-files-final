import React from "react";
import styles from "../../../styles/recipeDetails/ingredients.module.css";

function IngredientsListItem({ ingredient }) {
  return (
    <div className={styles.containerIngredientsListItem}>
      <div className={styles.containerListItemImg}>
        <img
          src={`https://img.spoonacular.com/ingredients_100x100/${ingredient.image}`}
          alt=""
        />
      </div>
      <div className={styles.containerListItemDesc}>
        <p>{ingredient.name}</p>
        <p>
          {ingredient.amount} {ingredient.unit}
        </p>
      </div>
    </div>
  );
}

export default IngredientsListItem;
