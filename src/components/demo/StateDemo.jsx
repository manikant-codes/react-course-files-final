import { useState } from "react";

function add(n1, n2) {
  return n1 + n2;
}

add(true, 45);

function StateDemo(props) {
  const [count, setCount] = useState(0);

  console.log("props", props);

  let x = 0;

  function increment() {
    // setCount(function (prevCount) {
    //   return prevCount + 1;
    // });
    setCount(count + 1);
    // setCount()
    // x++;
    // console.log("x", x);
  }

  function decrement() {
    // count--;
    // x--;
    // console.log("x", x);
    setCount(count - 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      {props.carImage}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          style={{
            fontSize: "2rem",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={decrement}
        >
          -
        </button>
        <p style={{ margin: 0, fontSize: "2rem" }}>{count}</p>
        {/* <input type="text" value={x} /> */}
        <button
          style={{
            fontSize: "2rem",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default StateDemo;
