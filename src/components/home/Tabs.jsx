import React, { useState } from "react";
import styles from "../../styles/home/tabs.module.css";

function Tabs({ list, setList }) {
  const [backupList, setBackupList] = useState(null);

  console.log("list", list);
  console.log("backupList", backupList);

  function handleAll() {
    if (backupList) {
      setList(backupList);
      setBackupList();
    }
  }

  function handleToday() {}

  function handlePending() {
    let pendingList;
    if (!backupList) {
      pendingList = list.filter((value) => {
        if (value.isCompleted === false) {
          return true;
        }
        return false;
      });
    } else {
      pendingList = backupList.filter((value) => {
        if (value.isCompleted === false) {
          return true;
        }
        return false;
      });
    }
    if (!backupList) {
      setBackupList(list);
    }
    setList(pendingList);
  }

  function handleOverDue() {}

  function handleCompleted() {
    let completedList;
    if (!backupList) {
      completedList = list.filter((value) => {
        if (value.isCompleted) {
          return true;
        }
        return false;
      });
    } else {
      completedList = backupList.filter((value) => {
        if (value.isCompleted) {
          return true;
        }
        return false;
      });
    }
    if (!backupList) {
      setBackupList(list);
    }
    setList(completedList);
  }

  return (
    <div className={styles.containerMain}>
      <button onClick={handleAll}>All</button>
      <button>Today</button>
      <button onClick={handlePending}>Pending</button>
      <button>Overdue</button>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
}

export default Tabs;
