import React, { useReducer, useState } from "react";

// {
//     type: "",
//     payload: ""
// }

function reducer(prevState, action) {
  switch (action.type) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    default:
      return prevState;
  }
}

function UseReducerCounterDemo() {
  //   const [count, setCount] = useState(0);
  //   let count = 0;

  const [count, dispatch] = useReducer(reducer, 0);

  function handleDecrement() {
    // count--;
    // document.getElementById("count").innerHTML = count;
    // console.log(count);
    // setCount(count - 1);
    dispatch({ type: "DECREMENT" });
  }

  function handleIncrement() {
    // count++;
    // document.getElementById("count").innerHTML = count;
    // console.log(count);
    // setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "32px",
        }}
      >
        <button className="btnPink" onClick={handleDecrement}>
          -
        </button>
        <h2 id="count">{count}</h2>
        <button className="btnPink" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default UseReducerCounterDemo;
