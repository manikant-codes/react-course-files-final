import React, { useState } from "react";
import styles from "../../styles/home/tabs.module.css";

function Tabs({ list, setList }) {
  const [backupList, setBackupList] = useState(null);

  function handleAll() {
    if (backupList) {
      setList(backupList);
      setBackupList(null);
    }
  }

  function handleToday() {
    const todayList = (backupList || list).filter((item) => {
      if (item.due === new Date().toISOString().split("T")[0]) {
        return true;
      }
      return false;
    });
    if (!backupList) {
      setBackupList(list);
    }
    setList(todayList);
  }

  function handlePending() {
    const pendingList = (backupList || list).filter((value) => {
      if (value.isCompleted === false) {
        return true;
      }
      return false;
    });
    if (!backupList) {
      setBackupList(list);
    }
    setList(pendingList);
  }

  function handleOverDue() {
    const overDueList = (backupList || list).filter((item) => {
      if (
        new Date().getTime() - 1000 * 60 * 60 * 24 >
        new Date(item.due).getTime()
      ) {
        return true;
      } else {
        return false;
      }
    });
    if (!backupList) {
      setBackupList(list);
    }
    setList(overDueList);
  }

  function handleCompleted() {
    const completedList = (backupList || list).filter((value) => {
      if (value.isCompleted) {
        return true;
      }
      return false;
    });
    if (!backupList) {
      setBackupList(list);
    }
    setList(completedList);
  }

  return (
    <div className={styles.containerMain}>
      <button onClick={handleAll}>All</button>
      <button onClick={handleToday}>Today</button>
      <button onClick={handlePending}>Pending</button>
      <button onClick={handleOverDue}>Overdue</button>
      <button onClick={handleCompleted}>Completed</button>
    </div>
  );
}

export default Tabs;
