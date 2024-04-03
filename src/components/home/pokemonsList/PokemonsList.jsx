import React, { useEffect, useState } from "react";
import PokemonCard from "./pokemonCard/PokemonCard";
import styles from "./pokemonsList.module.css";
import { getPokemons } from "../../../services/apiServices";

function PokemonsList() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    const promise = getPokemons();
    promise.then((data) => {
      setPokemons(data);
    });
  }, []);

  if (!pokemons) return null;

  return (
    <div className={styles.container}>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default PokemonsList;
