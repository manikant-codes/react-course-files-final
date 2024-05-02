import React from "react";
import RecipeInfo from "./RecipeInfo";
import RecipeImg from "./RecipeImg";
import styles from "../../../styles/recipeDetails/about.module.css";

function About(props) {
  const { recipeDetails } = props;
  return (
    <div className={styles.containerMain}>
      <RecipeInfo recipeDetails={recipeDetails} />
      <RecipeImg img={recipeDetails.image} />
    </div>
  );
}

export default About;
