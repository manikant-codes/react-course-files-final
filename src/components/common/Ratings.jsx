import React from "react";
import styles from "../../styles/common/ratings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Ratings(props) {
  const { numberOfReviews } = props;
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerStars}>
        <FontAwesomeIcon icon={faStar} color="#bdbdbd" />
        <FontAwesomeIcon icon={faStar} color="#bdbdbd" />
        <FontAwesomeIcon icon={faStar} color="#bdbdbd" />
        <FontAwesomeIcon icon={faStar} color="#bdbdbd" />
        <FontAwesomeIcon icon={faStar} color="#bdbdbd" />
      </div>
      <p>{numberOfReviews} reviews</p>
    </div>
  );
}

export default Ratings;
