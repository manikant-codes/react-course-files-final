import React, { useState } from "react";
import InfoBar from "../components/recipeDetails/infoBar/InfoBar";
import About from "../components/recipeDetails/about/About";
import Ingredients from "../components/recipeDetails/ingredients/Ingredients";
import RecipeSteps from "../components/recipeDetails/recipeSteps/RecipeSteps";
import ExploreMore from "../components/recipeDetails/exploreMore/ExploreMore";
import { getRecipeDetails } from "../services/apiServices";

function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState(null);

  function fetchRecipeDetails() {
    getRecipeDetails().then((data) => {
      setRecipeDetails(data);
    });
  }

  if (!recipeDetails) {
    fetchRecipeDetails();
  }

  if (!recipeDetails) return null;

  console.log("recipeDetails", recipeDetails);

  return (
    <div>
      {/* <button
        onClick={fetchRecipeDetails}
        style={{ margin: "32px auto", display: "block" }}
      >
        Fetch Recipe Details
      </button> */}
      <InfoBar
        time={{
          prepTime: recipeDetails.preparationMinutes,
          cookTime: recipeDetails.cookingMinutes,
          readyTime: recipeDetails.readyInMinutes,
        }}
      />
      <About recipeDetails={recipeDetails} />
      <Ingredients ingredients={recipeDetails.extendedIngredients} />
      <RecipeSteps />
      <ExploreMore />
    </div>
  );
}

export default RecipeDetails;
