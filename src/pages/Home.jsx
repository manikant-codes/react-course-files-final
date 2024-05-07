import React from "react";
import ReciepeList from "../components/home/ReciepeList";

function Home({ recipes }) {
  return (
    <div>
      <ReciepeList recipes={recipes} />
    </div>
  );
}

export default Home;
