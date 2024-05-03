import React from "react";
import styles from "../../styles/home/recipeList.module.css";
import RecipeCard from "./RecipeCard";

function ReciepeList({ recipes }) {
  if (!recipes) return null;

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerList}>
        {recipes.map((value, index) => {
          return <RecipeCard key={index} recipe={value} />;
        })}
      </div>
    </div>
  );
}

export default ReciepeList;
