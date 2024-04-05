import React, { useState } from "react";
import Searchbar from "../components/home/Searchbar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";
import SearchedPokemon from "../components/home/SearchedPokemon";

function Home() {
  const [query, setQuery] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  return (
    <div>
      <Searchbar
        query={query}
        setQuery={setQuery}
        setSearchedPokemon={setSearchedPokemon}
      />
      {searchedPokemon ? (
        <SearchedPokemon
          pokemon={searchedPokemon}
          setSearchedPokemon={setSearchedPokemon}
          setQuery={setQuery}
        />
      ) : (
        <PokemonsList />
      )}
    </div>
  );
}

export default Home;
