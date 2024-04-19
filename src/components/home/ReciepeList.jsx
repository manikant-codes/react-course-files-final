import React from "react";
import styles from "../../styles/home/recipeList.module.css";
import RecipeCard from "./RecipeCard";

function ReciepeList() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerList}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    </div>
  );
}

export default ReciepeList;
