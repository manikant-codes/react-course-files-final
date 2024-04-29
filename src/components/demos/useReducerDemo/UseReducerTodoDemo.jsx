import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useReducer, useState } from "react";

const initialState = [
  {
    id: Date.now(),
    task: "Task 1",
    isCompleted: false,
  },
];

function reducer(prevState, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...prevState,
        {
          id: Date.now(),
          task: action.payload,
          isCompleted: false,
        },
      ];
    case "UPDATE": {
      return;
    }
    case "DELETE": {
      const filteredTasks = prevState.filter((value) => {
        return value.id !== action.payload;
      });
      return filteredTasks;
    }
    default:
      return prevState;
  }
}

function UseReducerTodoDemo() {
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

  return (
    <div>
      <div style={{ padding: "24px 32px", backgroundColor: "#eeeeee" }}>
        <h2>useReducer Example</h2>
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
              <input type="checkbox" />
              <p style={{ flexGrow: 1, margin: "0px" }}>{value.task}</p>
              <button
                onClick={() => {
                  handleDelete(value.id);
                }}
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

export default UseReducerTodoDemo;
