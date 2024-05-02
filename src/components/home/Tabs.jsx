import React, { useReducer } from "react";
import styles from "../../styles/home/tabs.module.css";
import { ACTIONS } from "../../pages/Home";

const FILTER_ACTIONS = {
  ALL: "ALL",
  TODAY: "TODAY",
  PENDING: "PENDING",
  OVERDUE: "OVERDUE",
  COMPLETED: "COMPLETED",
};

function reducer(backupList, action) {
  switch (action.type) {
    case FILTER_ACTIONS.ALL: {
      if (backupList) {
        action.listDispatch({ type: ACTIONS.REPLACE, payload: backupList });
        return null;
      }
      return backupList;
    }
    case FILTER_ACTIONS.TODAY: {
      let newBackupList = backupList;
      const todayList = (backupList || action.payload).filter((item) => {
        if (item.due === new Date().toISOString().split("T")[0]) {
          return true;
        }
        return false;
      });

      if (!backupList) {
        newBackupList = action.payload;
      }
      action.listDispatch({ type: ACTIONS.REPLACE, payload: todayList });
      return newBackupList;
    }
    case FILTER_ACTIONS.PENDING: {
      let newBackupList = backupList;
      const pendingList = (backupList || action.payload).filter((value) => {
        if (value.isCompleted === false) {
          return true;
        }
        return false;
      });
      if (!backupList) {
        newBackupList = action.payload;
      }
      action.listDispatch({ type: ACTIONS.REPLACE, payload: pendingList });
      return newBackupList;
    }
    case FILTER_ACTIONS.OVERDUE: {
      let newBackupList = backupList;
      const overDueList = (backupList || action.payload).filter((item) => {
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
        newBackupList = action.payload;
      }
      action.listDispatch({ type: ACTIONS.REPLACE, payload: overDueList });
      return newBackupList;
    }
    case FILTER_ACTIONS.COMPLETED: {
      let newBackupList = backupList;
      const completedList = (backupList || action.payload).filter((value) => {
        if (value.isCompleted) {
          return true;
        }
        return false;
      });
      if (!backupList) {
        newBackupList = action.payload;
      }
      action.listDispatch({ type: ACTIONS.REPLACE, payload: completedList });
      return newBackupList;
    }
    default:
      return backupList;
  }
}

function Tabs({ list, listDispatch }) {
  const [backupList, dispatch] = useReducer(reducer, null);

  function handleAll() {
    dispatch({ type: FILTER_ACTIONS.ALL, listDispatch: listDispatch });
  }

  function handleToday() {
    dispatch({
      type: FILTER_ACTIONS.TODAY,
      payload: list,
      listDispatch: listDispatch,
    });
  }

  function handlePending() {
    dispatch({
      type: FILTER_ACTIONS.PENDING,
      payload: list,
      listDispatch: listDispatch,
    });
  }

  function handleOverDue() {
    dispatch({
      type: FILTER_ACTIONS.OVERDUE,
      payload: list,
      listDispatch: listDispatch,
    });
  }

  function handleCompleted() {
    dispatch({
      type: FILTER_ACTIONS.COMPLETED,
      payload: list,
      listDispatch: listDispatch,
    });
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
