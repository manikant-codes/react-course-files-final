import { computeHeadingLevel } from "@testing-library/react";
import React, { useState } from "react";

export default function UseMemoDemo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState(["List Item"]);

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
    </div>
  );
}
