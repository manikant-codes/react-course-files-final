import React, { useMemo, useState } from "react";

// function expensiveCalculation(num) {
//   let temp = 0;

//   for (let i = 1; i <= 1000000000; i++) {
//     temp += 1;
//   }

//   return temp + num;
// }

function UseMemoDemo() {
  const [list, setList] = useState(["List Item"]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const calculation = useMemo(() => {
    let temp = 0;

    for (let i = 1; i <= 1000000000; i++) {
      temp += 1;
    }

    return temp + count;

    // return expensiveCalculation(count);
  }, [count]);

  console.log("calculation", calculation);

  function addNew() {
    setList([...list, input]);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      {/* Title */}
      <div style={{ padding: "16px 32px", backgroundColor: "#eeeeee" }}>
        <h1>useMemo Hook</h1>
      </div>
      {/* End Title */}

      {/* Input */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          padding: "32px",
          paddingBottom: "0px",
        }}
      >
        <input
          type="text"
          style={{ padding: "5px 16px", flexGrow: 1 }}
          value={input}
          onChange={handleInput}
        />
        <button style={{}} onClick={addNew}>
          Add New
        </button>
      </div>
      {/* End Input */}

      {/* List */}
      <div style={{ padding: "32px" }}>
        <ul
          style={{
            listStyleType: "none",
            margin: "0px",
            padding: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          {list.map((value, index) => {
            return (
              <li
                style={{
                  padding: "16px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "8px",
                  fontSize: "1.25rem",
                }}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
      {/* End List */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "32px",
        }}
      >
        <button className="memoDemoBtn" onClick={handleDecrement}>
          -
        </button>
        <h2>{calculation}</h2>
        <button className="memoDemoBtn" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
}

export default UseMemoDemo;
