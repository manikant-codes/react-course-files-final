import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/tasksList.module.css";
import Button from "../../common/button/Button";

function ListItem({ toggleModal, task, list, setList, setSelectedTask }) {
  function handleDelete() {
    const updatedList = list.filter((value) => {
      if (value.id === task.id) {
        return false;
      }
      return true;
    });
    setList(updatedList);
  }

  function handleEdit() {
    toggleModal();
    setSelectedTask(task);
  }

  return (
    <div className={styles.containerListItem}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        style={{ marginRight: "16px" }}
      />
      <p>{task.task}</p>
      <p>{new Date(task.due).toLocaleDateString("en-IN")}</p>
      <div>
        <Button variant="outlined" color="info" onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button variant="outlined" color="error" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </div>
  );
}

export default ListItem;
