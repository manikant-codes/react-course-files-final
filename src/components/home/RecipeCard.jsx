import { faFire, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../../styles/home/recipeCard.module.css";
import InfoCircle from "../common/InfoCircle";
import LabelledIcon from "../common/LabelledIcon";
import Ratings from "../common/Ratings";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const { image, title, readyInMinutes, id } = recipe;
  const navigate = useNavigate();
  
  function goToDetailsPage() {
    navigate(`details/${id}`);
  }

  return (
    <div className={styles.containerMain} onClick={goToDetailsPage}>
      <div className={styles.containerImg}>
        <img src={image} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <h3>{title}</h3>
        <div>
          <Ratings numberOfReviews={1000} rating={3} />
        </div>
        <div className={styles.nutritionInfo}>
          <div className={styles.timeCal}>
            <LabelledIcon icon={faStopwatch} label={`${readyInMinutes}Min`} />
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
