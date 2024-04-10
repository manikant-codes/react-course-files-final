import React, { useEffect, useState } from "react";
import styles from "./statsRow.module.css";
import StatsGraph from "./statsGraph/StatsGraph";
import Tag from "../../home/pokemonsList/pokemonCard/tag/Tag";
import { getPokemonTypesDetails } from "../../../services/apiServices";
import { getWeaknesses } from "./statsHelper";

function StatsRow(props) {
  const { pokemon } = props;
  const [weaknesses, setWeaknesses] = useState(null);

  useEffect(() => {
    getPokemonTypesDetails(pokemon.types).then((data) => {
      const result = getWeaknesses(data);
      setWeaknesses(result);
    });
  }, [pokemon.types]);

  return (
    <div className={styles.containerMain}>
      <div>
        <StatsGraph stats={pokemon.stats} />
      </div>
      <div className={styles.tagsContainer}>
        <div className={styles.typesTags}>
          <h3>Types</h3>
          <div>
            {pokemon.types.map((value, index) => {
              return <Tag key={index} type={value.type.name} />;
            })}
          </div>
        </div>
        <div className={styles.typesTags}>
          <h3>Weakness</h3>
          <div>
            {weaknesses?.map((value, index) => {
              return <Tag key={index} type={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
