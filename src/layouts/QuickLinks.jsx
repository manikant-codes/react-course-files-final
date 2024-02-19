import React from "react";

function QuickLinks() {
  return (
    <div>
      <ul
        style={{
          listStyleType: "none",
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
      </ul>
    </div>
  );
}

export default QuickLinks;
