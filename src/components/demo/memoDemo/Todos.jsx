import React, { memo } from "react";

function Todos({ count }) {
  console.log("todos rendered");
  return (
    <div style={{ minWidth: "100%" }}>
      <h2>Todos {count}</h2>
      <ul
        style={{
          listStyleType: "none",
          backgroundColor: "#e1bee7",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <li style={{ backgroundColor: "#ba68c8", padding: "4px 8px" }}>
          Todo 1
        </li>
        <li style={{ backgroundColor: "#ba68c8", padding: "4px 8px" }}>
          Todo 2
        </li>
        <li style={{ backgroundColor: "#ba68c8", padding: "4px 8px" }}>
          Todo 3
        </li>
      </ul>
    </div>
  );
}

export default memo(Todos);
