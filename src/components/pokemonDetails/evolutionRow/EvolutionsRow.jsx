import React, { useEffect, useState } from "react";
import styles from "../../../styles/pokemonDetails/evolutionRow.module.css";
import { fetchPokemonEvolutions } from "../../../services/apiServices";
import EvolutionCard from "./EvolutionCard";

function EvolutionsRow(props) {
  const { species } = props;
  const [evolutions, setEvolutions] = useState(null);

  useEffect(() => {
    fetchPokemonEvolutions(species.url).then((data) => {
      setEvolutions(data);
    });
  }, [species.url]);

  return (
    <div className={styles.containerMain}>
      {evolutions?.map((value) => {
        return <EvolutionCard key={value.id} pokemon={value} />;
      })}
    </div>
  );
}

export default EvolutionsRow;
