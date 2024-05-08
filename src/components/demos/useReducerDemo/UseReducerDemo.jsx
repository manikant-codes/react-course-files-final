import React, { useReducer } from "react";

const initialState = 0;

function reducer(prevCount, action) {
  switch (action.type) {
    case "INCREMENT":
      return prevCount + action.payload;
    case "DECREMENT":
      return prevCount - 1;
    default:
      return prevCount;
  }
}

function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  function handleDecrement() {
    dispatch({ type: "DECREMENT" });
  }

  function handleIncrement() {
    dispatch({ type: "INCREMENT", payload: 10 });
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "32px",
          padding: "32px",
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default UseReducerDemo;
