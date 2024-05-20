import React, { useCallback, useState } from "react";
import Todos from "./Todos";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  const handleSayHi = useCallback(() => {
    alert("Hi!");
  }, [count]);

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
        <Todos handleSayHi={handleSayHi} />
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
          <h2>{count}</h2>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
