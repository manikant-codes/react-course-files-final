import React from "react";
import styles from "./statsRow.module.css";
import StatsGraph from "./statsGraph/StatsGraph";
import Tag from "../../home/pokemonsList/pokemonCard/tag/Tag";

function StatsRow(props) {
  const { pokemon } = props;
  return (
    <div className={styles.containerMain}>
      <div>
        <StatsGraph stats={pokemon.stats} />
      </div>
      <div className={styles.tagsContainer}>
        <div className={styles.typesTags}>
          <h3>Types</h3>
          <div>
            {pokemon.types.map((value) => {
              return <Tag type={value.type.name} />;
            })}
          </div>
        </div>
        <div className={styles.typesTags}>
          <h3>Weakness</h3>
          <div>
            {pokemon.types.map((value) => {
              return <Tag type={value.type.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
