import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/tasksList.module.css";
import Button from "../../common/button/Button";

function ListItem({ toggleModal, task }) {
  return (
    <div className={styles.containerListItem}>
      <p>{task.task}</p>
      <p>{new Date(task.due).toLocaleDateString("en-IN")}</p>
      <div>
        <Button variant="outlined" color="info" onClick={toggleModal}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="outlined" color="error">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
