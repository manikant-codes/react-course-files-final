import React, { useEffect, useState } from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../../../services/apiServices";

function PokemonsList() {
  const [pokemons, setPokemons] = useState(null);

  useEffect(() => {
    fetchPokemons().then((data) => {
      Promise.all(data).then((resolved) => {
        setPokemons(resolved);
      });
    });
  }, []);

  console.log("pokemons", pokemons);

  if (!pokemons) return null;

  return (
    <div className={styles.listContainer}>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
    </div>
  );
}

export default PokemonsList;
