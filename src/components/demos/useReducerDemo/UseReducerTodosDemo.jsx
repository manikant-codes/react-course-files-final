import React, { useReducer } from "react";

const initialState = [
  {
    id: Date.now(),
    task: "Task",
    isCompleted: false,
  },
];

function reducer(prevTodos, action) {
  switch (action.type) {
    case "ADD": {
      const newTodos = [...prevTodos, action.payload];
      return newTodos;
    }
    case "DELETE": {
      const filteredTodos = prevTodos.filter((todo) => {
        if (todo.id === action.payload) {
          return false;
        }
        return true;
      });
      return filteredTodos;
    }
    case "UPDATE": {
      const updatedTodos = prevTodos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      return updatedTodos;
    }
    default:
      return prevTodos;
  }
}

function UseReducerTodosDemo() {
  const [todos, dispatch] = useReducer(reducer, initialState);

  console.log(todos);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        task: e.target["todo"].value,
        isCompleted: false,
      },
    });
  }

  function handleUpdate(id) {
    dispatch({ type: "UPDATE", payload: id });
  }

  function handleDelete(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  return (
    <div>
      <div
        style={{
          padding: "16px 32px",
          backgroundColor: "#eeeeee",
          borderBottom: "solid 1px #bdbdbd",
        }}
      >
        <h1>Todos</h1>
      </div>
      <div
        style={{
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <form
          style={{
            display: "flex",
            gap: "16px",
          }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="todo"
            style={{
              flexGrow: 1,
              padding: "6px",
            }}
          />
          <button type="submit">Add Task</button>
        </form>
        <div
          style={{
            marginTop: "32px",
          }}
        >
          <ul
            style={{
              listStyleType: "none",
              margin: "0px",
              padding: "0px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {todos.map((todo) => {
              return (
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    backgroundColor: "#eeeeee",
                    borderRadius: "8px",
                    padding: "16px",
                    border: "solid 1px #bdbdbd",
                  }}
                >
                  <input
                    type="checkbox"
                    onChange={() => {
                      handleUpdate(todo.id);
                    }}
                  />
                  <p
                    style={{
                      margin: "0px",
                      flexGrow: 1,
                      fontSize: "1.125rem",
                    }}
                  >
                    {todo.task}
                  </p>
                  <button
                    onClick={() => {
                      handleDelete(todo.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UseReducerTodosDemo;
