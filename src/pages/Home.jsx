import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useReducer, useState } from "react";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../helpers/localStorageHelper";

const initialState = getTodos();

function reducer(prevState, action) {
  switch (action.type) {
    case "ADD":
      const todo = {
        id: Date.now(),
        task: action.payload,
        isCompleted: false,
      };
      addTodo(todo, prevState);
      return getTodos();
    // return [
    //   ...prevState,
    //   {
    //     id: Date.now(),
    //     task: action.payload,
    //     isCompleted: false,
    //   },
    // ];
    case "UPDATE": {
      updateTodo(action.payload, prevState);
      return getTodos();
      // const updatedList = prevState.map((value) => {
      //   if (value.id === action.payload) {
      //     return { ...value, isCompleted: !value.isCompleted };
      //   }
      //   return value;
      // });
      // return updatedList;
    }
    case "DELETE": {
      deleteTodo(action.payload, prevState);
      return getTodos();
      //   const filteredTasks = prevState.filter((value) => {
      //     if (value.id === action.payload) {
      //       return false;
      //     }
      //     return true;
      //   });
      //   return filteredTasks;
    }
    default:
      return prevState;
  }
}

function Home() {
  //   const [list, setList] = useState(["List Item"]);
  const [list, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    // const newList = [...list, input];
    // setList(newList);
    // setInput("");
    dispatch({ type: "ADD", payload: input });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function handleComplete(id) {
    dispatch({ type: "UPDATE", payload: id });
  }

  return (
    <div>
      <div style={{ padding: "24px 32px", backgroundColor: "#eeeeee" }}>
        <h2>Todos</h2>
      </div>
      <div
        style={{ display: "flex", padding: "24px 32px 0px 32px", gap: "8px" }}
      >
        <input
          type="text"
          style={{ padding: "6px 16px", flexGrow: 1 }}
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAdd} className="btnPink">
          Add Item
        </button>
      </div>
      <ul
        style={{
          padding: "32px",
          margin: "0px",
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {list.map((value, index) => {
          return (
            <li
              key={index}
              style={{
                padding: "12px",
                backgroundColor: "#eeeeee",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <input
                type="checkbox"
                checked={value.isCompleted}
                onChange={() => {
                  handleComplete(value.id);
                }}
              />
              <p style={{ flexGrow: 1, margin: "0px" }}>{value.task}</p>
              <button
                onClick={() => {
                  handleDelete(value.id);
                }}
                className="btnPink"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
