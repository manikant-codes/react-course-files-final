import React, { useReducer } from "react";
import Tabs from "../components/home/Tabs";
import TasksList from "../components/home/tasksList/TasksList";

// const action = {
//   type: "INSERT",
//   payload: {},
// };

export const ACTIONS = {
  INSERT: "INSERT",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  REPLACE: "REPLACE",
};

const initialState = [
  {
    id: Date.now(),
    task: "Task 1",
    isCompleted: false,
    due: "2024-04-28",
  },
];

function reducer(list, action) {
  switch (action.type) {
    case ACTIONS.INSERT: {
      const newList = [
        ...list,
        {
          id: Date.now(),
          task: action.payload.task,
          isCompleted: action.payload.isCompleted,
          due: action.payload.due,
        },
      ];
      return newList;
    }
    case ACTIONS.UPDATE: {
      const newList = list.map((value) => {
        if (value.id === action.payload.id) {
          return {
            ...value,
            isCompleted: action.payload.isCompleted,
            task: action.payload.task,
            due: action.payload.due,
          };
        }
        return value;
      });
      return newList;
    }
    case ACTIONS.DELETE: {
      const newList = list.filter((value) => {
        if (value.id === action.payload) {
          return false;
        }
        return true;
      });
      return newList;
    }
    case ACTIONS.REPLACE: {
      return action.payload;
    }
    default:
      return list;
  }
}

function Home() {
  const [list, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Tabs list={list} listDispatch={dispatch} />
      <TasksList list={list} dispatch={dispatch} />
    </div>
  );
}

export default Home;
