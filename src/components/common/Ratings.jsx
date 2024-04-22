import React from "react";
import styles from "../../styles/common/ratings.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Ratings(props) {
  const { numberOfReviews, rating } = props;
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerStars}>
        {[...Array(5)].map((value, index) => {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              color={index + 1 <= rating ? "#fda120" : "#bdbdbd"}
            />
          );
        })}
      </div>
      <p>{numberOfReviews} reviews</p>
    </div>
  );
}

export default Ratings;
