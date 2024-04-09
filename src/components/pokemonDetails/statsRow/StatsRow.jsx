import React, { useEffect, useState } from "react";
import styles from "../../../styles/pokemonDetails/statsRow.module.css";
import Table from "./Table";
import Tag from "../../home/pokemonsList/Tag";
import { getPokemonTypesDetails } from "../../../services/apiServices";
import { getPokemonWeaknesses } from "../../../helpers/pokemonHelper";

function StatsRow(props) {
  const { pokemon } = props;
  const [weaknesses, setWeaknesses] = useState(null);

  useEffect(() => {
    getPokemonTypesDetails(pokemon.types).then((data) => {
      const result = getPokemonWeaknesses(data);
      setWeaknesses(result);
    });
  }, [pokemon.types]);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerTable}>
        <Table stats={pokemon.stats} />
      </div>
      <div className={styles.containerTags}>
        <div>
          <h3>Type</h3>
          <div>
            {pokemon.types.map((value) => {
              return <Tag type={value.type.name} />;
            })}
          </div>
        </div>
        <div>
          <h3>Weaknesses</h3>
          <div>
            {weaknesses?.map((value) => {
              return <Tag type={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
