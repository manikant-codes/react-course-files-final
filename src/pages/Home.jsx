import React, { useState } from "react";
import ReciepeList from "../components/home/ReciepeList";
import { getRandomRecepies } from "../services/apiServices";

function Home() {
  const [recipes, setRecipes] = useState(null);

  function fetchRandomRecipies() {
    getRandomRecepies().then((result) => {
      setRecipes(result?.recipes);
    });
  }

  if (!recipes) {
    fetchRandomRecipies();
  }

  return (
    <div>
      <ReciepeList recipes={recipes} />
    </div>
  );
}

export default Home;
