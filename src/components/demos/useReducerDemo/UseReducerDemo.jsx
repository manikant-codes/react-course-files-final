import React, { useReducer } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "INCREMENT":
      return prevState + action.payload;
    case "DECREMENT":
      return prevState - action.payload;
    default:
      return prevState;
  }
}

function UseReducerDemo() {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, 0);

  function handleDecrement() {
    // setCount(count - 1);
    dispatch({ type: "DECREMENT", payload: 2 });
  }

  function handleIncrement() {
    // setCount(count + 1);
    dispatch({ type: "INCREMENT", payload: 2 });
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
