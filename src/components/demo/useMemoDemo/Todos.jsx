import React, { memo } from "react";

function Todos({ todos, setTodos }) {
  console.log("todos rendered");

  function handleAddTodo() {
    setTodos([...todos, "new todo"]);
  }

  return (
    <div
      style={{
        minWidth: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <h2>Todos </h2>
      <ul
        style={{
          listStyleType: "none",
          backgroundColor: "#e1bee7",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {todos.map((todo, index) => {
          return (
            <li
              key={index}
              style={{ backgroundColor: "#ba68c8", padding: "4px 8px" }}
            >
              {todo}
            </li>
          );
        })}
      </ul>
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

export default memo(Todos);
