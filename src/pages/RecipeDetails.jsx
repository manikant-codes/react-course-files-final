import React, { useState } from "react";
import InfoBar from "../components/recipeDetails/infoBar/InfoBar";
import About from "../components/recipeDetails/about/About";
import Ingredients from "../components/recipeDetails/ingredients/Ingredients";
import RecipeSteps from "../components/recipeDetails/recipeSteps/RecipeSteps";
import ExploreMore from "../components/recipeDetails/exploreMore/ExploreMore";
import { getRecipeDetails, getRecipeSteps } from "../services/apiServices";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [recipeSteps, setRecipeSteps] = useState(null);

  const params = useParams();
  const id = params.kuchbhi;

  function fetchRecipeDetails() {
    getRecipeDetails(id).then((data) => {
      setRecipeDetails(data);
    });
    getRecipeSteps(id).then((data) => {
      setRecipeSteps(data[0]);
    });
  }

  if (!recipeDetails) {
    fetchRecipeDetails();
  }

  if (!recipeDetails) return null;

  console.log("recipeDetails", recipeDetails);
  console.log("recipeSteps", recipeSteps);

  return (
    <div>
      <InfoBar
        time={{
          prepTime: recipeDetails.preparationMinutes,
          cookTime: recipeDetails.cookingMinutes,
          readyTime: recipeDetails.readyInMinutes,
        }}
      />
      <About recipeDetails={recipeDetails} />
      <Ingredients ingredients={recipeDetails.extendedIngredients} />
      <RecipeSteps recipeSteps={recipeSteps} />
      <ExploreMore />
    </div>
  );
}

export default RecipeDetails;
