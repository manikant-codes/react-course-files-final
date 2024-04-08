import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSinglePokemon } from "../services/apiServices";
import { param } from "jquery";
import Title from "../components/pokemonDetails/Title";
import Navigations from "../components/pokemonDetails/Navigations";
import InfoRow from "../components/pokemonDetails/InfoRow";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    getSinglePokemon(params.id).then((data) => {
      setPokemon(data);
    });
  }, [params.id]);

  if (!pokemon) return null;

  console.log(pokemon);

  return (
    <div>
      <Navigations />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
    </div>
  );
}

export default PokemonDetails;
