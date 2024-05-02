import React from "react";
import styles from "../../../styles/home/tasksList.module.css";
import ListItem from "./ListItem";

function List({ toggleModal, list, dispatch, setSelectedTask }) {
  return (
    <div className={styles.containerList}>
      {list.map((value) => {
        return (
          <ListItem
            key={value.id}
            task={value}
            toggleModal={toggleModal}
            dispatch={dispatch}
            setSelectedTask={setSelectedTask}
          />
        );
      })}
    </div>
  );
}

export default List;
