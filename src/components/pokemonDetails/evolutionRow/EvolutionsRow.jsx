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

  if (!evolutions || !evolutions.length || !evolutions[0]) return null;

  return (
    <div className={styles.containerMain}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.containerInner}>
        {evolutions?.map((value) => {
          return <EvolutionCard key={value.id} pokemon={value} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;
