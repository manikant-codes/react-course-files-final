import React from "react";
import ListItem from "./ListItem";
import styles from "../../../styles/home/tasksList.module.css";

function List({ toggleModal, list }) {
  return (
    <div className={styles.containerList}>
      {list.map((value) => {
        return (
          <ListItem key={value.id} task={value} toggleModal={toggleModal} />
        );
      })}
    </div>
  );
}

export default List;
