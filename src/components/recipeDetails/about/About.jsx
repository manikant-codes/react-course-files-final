import React from "react";
import RecipeInfo from "./RecipeInfo";
import RecipeImg from "./RecipeImg";
import styles from "../../../styles/recipeDetails/about.module.css";

function About() {
  return (
    <div className={styles.containerMain}>
      <RecipeInfo />
      <RecipeImg />
    </div>
  );
}

export default About;
