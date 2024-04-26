import React, { useState } from "react";
import Searchbar from "../layouts/Searchbar";
import ReciepeList from "../components/home/ReciepeList";
import { getRandomRecepies } from "../services/apiServices";

function Home() {
  const [recipes, setRecipes] = useState(null);

  function fetchRandomRecipies() {
    getRandomRecepies().then((result) => {
      setRecipes(result?.recipes);
    });
  }

  return (
    <div>
      <div style={{ width: "100%" }}>
        <button
          style={{
            margin: "auto",
            display: "block",
            marginBottom: "32px",
            marginTop: "32px",
          }}
          onClick={fetchRandomRecipies}
        >
          Get Recipies
        </button>
      </div>
      <ReciepeList recipes={recipes} />
    </div>
  );
}

export default Home;
