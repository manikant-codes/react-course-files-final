import React, { useCallback, useState } from "react";
import DemoCard from "./DemoCard";

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  const handleCallMe = useCallback(
    function () {
      alert("Count: " + count);
    },
    [count]
  );

  return (
    <div
      style={{
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        alignItems: "center",
      }}
    >
      <div>
        <DemoCard
          src="https://images.unsplash.com/photo-1712512162273-2a622d8b0c74?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          //   title={"Astronaut " + count}
          title={"Astronaut"}
          handleCallMe={handleCallMe}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <h3>{count}</h3>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}

export default UseCallbackDemo;
