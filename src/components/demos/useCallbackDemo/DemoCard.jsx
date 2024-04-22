import React, { memo } from "react";

function DemoCard(props) {
  const { src, title, handleCallMe } = props;

  console.log("Memo Card Rendered");

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#eeeeee",
        border: "solid 1px #bdbdbd",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={src}
          alt={title}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div
        style={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ fontSize: "1.5rem" }}>{title}</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
          perspiciatis!
        </p>
        <button style={{ padding: "8px" }} onClick={handleCallMe}>
          Call Me
        </button>
      </div>
    </div>
  );
}

export default memo(DemoCard);
