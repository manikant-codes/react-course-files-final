import React, { useCallback, useState } from "react";
import MemoCard from "./MemoCard";

function MemoDemo() {
  const [count, setCount] = useState(0);
  const [isTrue, setIsTrue] = useState(false);

  function handleDecrement() {
    setCount(count - 1);
  }
  function handleIncrement() {
    setCount(count + 1);
  }

  const sayHi = useCallback(
    function () {
      alert("Count: " + count);
    },
    [count]
  );

  // function sayHi() {
  //   alert("Count: " + count);
  // }

  function toggleTrue() {
    setIsTrue(!isTrue);
    alert(isTrue);
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <div>
          <MemoCard
            src="https://plus.unsplash.com/premium_photo-1711136314731-8c3fe1831672?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Cherry Blossom"
            // title={"Cherry Blossom " + Date.now()}
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, facilis!"
            sayHi={sayHi}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button className="memoDemoBtn" onClick={handleDecrement}>
            -
          </button>
          <h2>{count}</h2>
          <button className="memoDemoBtn" onClick={handleIncrement}>
            +
          </button>
        </div>
        <div>
          <button onClick={toggleTrue}>Toggle True</button>
        </div>
      </div>
    </div>
  );
}

export default MemoDemo;
