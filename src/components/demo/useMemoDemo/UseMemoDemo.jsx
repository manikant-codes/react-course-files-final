import React, { useMemo, useState } from "react";
import Todos from "./Todos";

function complexCalculation(number) {
  let temp = 0;

  for (let i = 0; i < 1000000000; i++) {
    temp += 1;
  }

  return temp + number;
}

function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["task 1"]);

  const complexValue = useMemo(() => {
    return complexCalculation(count);
  }, [count]);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <div
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <Todos todos={todos} setTodos={setTodos} />
        <div
          style={{
            backgroundColor: "#e1bee7",
            padding: "32px",
            display: "flex",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <button onClick={handleDecrease}>-</button>
          <h2>{complexValue}</h2>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}

export default UseMemoDemo;
