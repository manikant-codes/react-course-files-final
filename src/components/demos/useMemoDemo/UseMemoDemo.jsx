import React, { useMemo, useState } from "react";

function expensiveCalculation(num) {
  let temp = 0;

  for (let i = 0; i < 1000000000; i++) {
    temp += 1;
  }

  return temp + num;
}

export default function UseMemoDemo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [list, setList] = useState(["List Item"]);

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAddNew() {
    const newList = [...list, input];
    setList(newList);
  }

  return (
    <div>
      <div style={{ padding: "24px 32px", backgroundColor: "#e0e0e0" }}>
        <h1>useMemo Example</h1>
      </div>
      <div
        style={{
          padding: "32px",
          display: "flex",
          gap: "8px",
          paddingBottom: "0px",
        }}
      >
        <input
          type="text"
          style={{ padding: "5px", flexGrow: 1 }}
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAddNew}>Add New</button>
      </div>
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
                key={index}
                style={{
                  padding: "12px",
                  backgroundColor: "#e0e0e0",
                  borderRadius: "4px",
                }}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
          padding: "32px",
        }}
      >
        <button onClick={handleDecrement}>-</button>
        <h3>{result}</h3>
        <button onClick={handleIncrement}>+</button>
      </div>
    </div>
  );
}
