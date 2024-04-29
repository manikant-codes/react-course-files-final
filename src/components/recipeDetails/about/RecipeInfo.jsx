import React from "react";
import Ratings from "../../common/Ratings";
import styles from "../../../styles/recipeDetails/about.module.css";

function RecipeInfo() {
  return (
    <div className={styles.containerRecipeInfo}>
      <h2 className={styles.recipeTitle}>Recipe Title</h2>
      <Ratings rating={4} numberOfReviews={50} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero
        praesentium obcaecati tenetur optio fugit fugiat ipsa, mollitia officia
        ea. Recusandae harum tempore adipisci nostrum illum eveniet odit ab modi
        deserunt. Explicabo sed dolores error autem est dignissimos, deleniti
        eius reprehenderit adipisci cum quidem corrupti odit doloremque iusto
        nihil sequi enim!
      </p>
    </div>
  );
}

export default RecipeInfo;
