import React from "react";
import Ratings from "../../common/Ratings";
import styles from "../../../styles/recipeDetails/about.module.css";
import NutritionTable from "../nutritionTable/NutritionTable";

function RecipeInfo({ recipeDetails }) {
  return (
    <div className={styles.containerRecipeInfo}>
      <h2 className={styles.recipeTitle}>{recipeDetails.title}</h2>
      <Ratings rating={4} numberOfReviews={50} />
      <p dangerouslySetInnerHTML={{ __html: recipeDetails.summary }} />
      <NutritionTable />
    </div>
  );
}

export default RecipeInfo;
