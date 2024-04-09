import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../services/apiServices";
import Navigations from "../components/pokemonDetails/navigations/Navigations";
import Title from "../components/pokemonDetails/title/Title";
import InfoRow from "../components/pokemonDetails/infoRow/InfoRow";
import StatsRow from "../components/pokemonDetails/statsRow/StatsRow";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();

  console.log("params.name", params.name);

  useEffect(() => {
    getSinglePokemon(params.name).then((data) => {
      setPokemon(data);
    });
  }, [params.name]);

  if (!pokemon) return null;

  return (
    <div>
      <Navigations />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
      <StatsRow pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetails;
