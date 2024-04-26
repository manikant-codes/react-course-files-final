import React, { useReducer, useState } from "react";

const initialState = 0;

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return (state += 1);
    case ACTIONS.DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
}

function UseReducerCounterDemo() {
  //   const [count, setCount] = useState(0);

  const [count, dispatch] = useReducer(reducer, initialState);

  //   let count = 0;

  function handleIncrement() {
    // With useState
    // setCount(count + 1);
    // Without State
    // console.log((count += 1));
    // document.getElementById("para").innerHTML = count;
    // With useReducer
    dispatch({ type: ACTIONS.INCREMENT });
  }
  function handleDecrement() {
    // With useState
    // setCount(count - 1);
    // Without State
    // console.log((count -= 1));
    // document.getElementById("para").innerHTML = count;
    // With useReducer
    dispatch({ type: ACTIONS.DECREMENT });
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button onClick={handleDecrement}>-</button>
        <p style={{ margin: "0px", fontSize: "2rem" }}>{count}</p>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default UseReducerCounterDemo;
