import React from "react";
import styles from "../../styles/home/recipeCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ratings from "../common/Ratings";

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
          <Ratings numberOfReviews={1000} />
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
