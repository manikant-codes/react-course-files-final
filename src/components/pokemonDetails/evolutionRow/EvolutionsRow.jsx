import React from "react";
import useCustomFetch from "../../../customHooks/useCustomFetch";
import { fetchPokemonEvolutions } from "../../../services/apiServices";
import styles from "../../../styles/pokemonDetails/evolutionRow.module.css";
import Error from "../../common/Error";
import Loader from "../../common/Loader";
import EvolutionCard from "./EvolutionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function EvolutionsRow(props) {
  const { species } = props;
  // const [evolutions, setEvolutions] = useState(null);

  function fetchEvolutions(setLoading, setData, setError) {
    fetchPokemonEvolutions(species.url)
      .then((data) => {
        setData(data.filter((value) => value !== undefined));
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
    data: evolutions,
    error,
  } = useCustomFetch(fetchEvolutions, [species.url]);

  // useEffect(() => {
  //   fetchPokemonEvolutions(species.url).then((data) => {
  //     setEvolutions(data);
  //   });
  // }, [species.url]);

  // if (!evolutions || !evolutions.length || !evolutions[0]) return null;

  if (loading) {
    return (
      <Loader loaderSize="3rem" containerHeight="100%" containerWidth="100%" />
    );
  }

  if (error) {
    return <Error message={error?.message} />;
  }

  return (
    <div className={styles.containerMain}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.containerInner}>
        {evolutions?.map((value, index) => {
          return (
            <>
              <EvolutionCard key={value.id} pokemon={value} />
              {index < evolutions.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  fontSize="3rem"
                  color="white"
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;
