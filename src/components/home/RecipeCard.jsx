import React from "react";
import styles from "../../styles/home/recipeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../common/Ratings";
import {
  faFire,
  faStopwatch,
  faStopwatch20,
} from "@fortawesome/free-solid-svg-icons";
import InfoCircle from "../common/InfoCircle";
import LabelledIcon from "../common/LabelledIcon";

function RecipeCard({ img, title, time }) {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={img} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <h3>{title}</h3>
        <div>
          <Ratings numberOfReviews={1000} rating={3} />
        </div>
        <div className={styles.nutritionInfo}>
          <div className={styles.timeCal}>
            <LabelledIcon icon={faStopwatch} label={`${time}Min`} />
            <LabelledIcon icon={faFire} label="376Cal" />
          </div>
          <div>
            <div>
              <InfoCircle type="carb" measure="6g" />
            </div>
            <div>
              <InfoCircle type="protein" measure="32g" />
            </div>
            <div>
              <InfoCircle type="fat" measure="24g" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
