import React, { useEffect, useState } from "react";
import styles from "./evolutionsRow.module.css";
import EvolutionCard from "./evolutionCard/EvolutionCard";
import { getPokemonEvolutions } from "../../../services/apiServices";

function EvolutionsRow(props) {
  const { species } = props;
  const [evolutions, setEvolutions] = useState(null);

  useEffect(() => {
    getPokemonEvolutions(species.url).then((data) => {
      setEvolutions(data);
    });
  }, [species.url]);

  return (
    <div className={styles.containerMain}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.containerInner}>
        {evolutions?.map((pokemon) => {
          return <EvolutionCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;
