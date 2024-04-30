import React from "react";
import ListItem from "./ListItem";
import styles from "../../../styles/home/tasksList.module.css";

function List({ toggleModal, list, setList, setSelectedTask }) {
  return (
    <div className={styles.containerList}>
      {list.map((value) => {
        return (
          <ListItem
            key={value.id}
            task={value}
            toggleModal={toggleModal}
            setList={setList}
            list={list}
            setSelectedTask={setSelectedTask}
          />
        );
      })}
    </div>
  );
}

export default List;
