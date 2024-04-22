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

function RecipeCard() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img
          src="https://images.carbmanager.com/eEExUfrZDpNN99-qk6mECRJiBXHFc6p6XZ1EGIKnZGU/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vLzFkYzk0MjVkLWVhNTYtYzM3ZC05MTE4LWNjYmI0ZTIxNmI1My5qcGVnP2FsdD1tZWRpYSZ0b2tlbj1kYjgwYjg0NC0yNDhhLTQxOGUtYjMyOC1hODk2NDFlYjBmZjQ"
          alt=""
        />
      </div>
      <div className={styles.containerInfo}>
        <h3>Keto Philly Cheesesteak Skillet</h3>
        <div>
          <Ratings numberOfReviews={1000} rating={3} />
        </div>
        <div className={styles.nutritionInfo}>
          <div className={styles.timeCal}>
            <LabelledIcon icon={faStopwatch} label="30Min" />
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
