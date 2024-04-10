import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSinglePokemon } from "../services/apiServices";
import Navigations from "../components/pokemonDetails/Navigations";
import Title from "../components/pokemonDetails/Title";
import InfoRow from "../components/pokemonDetails/InfoRow";
import StatsRow from "../components/pokemonDetails/StatsRow";
import EvolutionsRow from "../components/pokemonDetails/evolutionRow/EvolutionsRow";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchSinglePokemon(params.name).then((data) => {
      setPokemon(data);
    });
  }, [params.name]);

  if (!pokemon) return null;

  console.log("pokemon", pokemon);

  return (
    <div>
      <Navigations />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
      <StatsRow pokemon={pokemon} />
      <EvolutionsRow species={pokemon.species} />
    </div>
  );
}

export default PokemonDetails;
