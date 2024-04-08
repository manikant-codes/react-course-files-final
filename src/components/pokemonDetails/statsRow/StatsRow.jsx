import React from "react";
import styles from "../../../styles/pokemonDetails/statsRow.module.css";
import Table from "./Table";

function StatsRow(props) {
  const { pokemon } = props;
  return (
    <div>
      <div>
        <Table stats={pokemon.stats} />
      </div>
      <div></div>
    </div>
  );
}

export default StatsRow;
