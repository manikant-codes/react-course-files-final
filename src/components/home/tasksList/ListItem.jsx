import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/tasksList.module.css";
import Button from "../../common/button/Button";

function ListItem() {
  return (
    <div className={styles.containerListItem}>
      <p>Lorem ipsum dolor sit amet.</p>
      <p>{new Date().toDateString()}</p>
      <div>
        <Button variant="outlined">
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="outlined" color="info">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
