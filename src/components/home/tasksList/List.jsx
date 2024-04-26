import React from "react";
import ListItem from "./ListItem";
import styles from "../../../styles/home/tasksList.module.css";

function List() {
  return (
    <div className={styles.containerList}>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default List;
