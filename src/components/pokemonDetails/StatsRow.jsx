import CanvasJSReact from "@canvasjs/react-charts";
import Tag from "../home/pokemonsList/Tag";
import styles from "../../styles/pokemonDetails/statsRow.module.css";
import { useEffect, useState } from "react";
import { fetchPokemonWeaknesses } from "../../services/apiServices";
import { getWeaknesses } from "../../helpers/pokedexHelpers";
import useCustomFetch from "../../customHooks/useCustomFetch";
import Loader from "../common/Loader";
import Error from "../common/Error";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StatsRow(props) {
  const { pokemon } = props;

  // const [weaknesses, setWeaknesses] = useState(null);

  // useEffect(() => {
  //   fetchPokemonWeaknesses(pokemon.types).then((data) => {
  //     const temp = getWeaknesses(data);
  //     setWeaknesses(temp);
  //   });
  // }, [pokemon.types]);

  function customFetch(setLoading, setData, setError) {
    fetchPokemonWeaknesses(pokemon.types)
      .then((data) => {
        const temp = getWeaknesses(data);
        setData(temp);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const {
    loading,
    data: weaknesses,
    error,
  } = useCustomFetch(customFetch, [pokemon.types]);

  if (loading)
    return (
      <Loader loaderSize="3rem" containerHeight="100%" containerWidth="100%" />
    );

  if (error) {
    return <Error message={error?.message} />;
  }

  const options = {
    title: {
      text: "Stats",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "HP", y: pokemon.stats[0].base_stat || 0 },
          { label: "Attack", y: pokemon.stats[1].base_stat || 0 },
          { label: "Defense", y: pokemon.stats[2].base_stat || 0 },
          { label: "Special Attack", y: pokemon.stats[3].base_stat || 0 },
          { label: "Special Defense", y: pokemon.stats[4].base_stat || 0 },
          { label: "Speed", y: pokemon.stats[5].base_stat || 0 },
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <CanvasJSChart options={options} />
      </div>
      <div className={styles.tagsContainer}>
        <div>
          <h3>Types</h3>
          <div>
            {pokemon.types.map((value, index) => {
              return <Tag key={index} type={value.type.name} />;
            })}
          </div>
        </div>
        <div>
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
