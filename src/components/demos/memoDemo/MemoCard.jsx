import React, { memo } from "react";

function MemoCard(props) {
  const { src, title, desc, sayHi } = props;

  console.log("Memo Card Rendered!");

  return (
    <div
      style={{
        width: "300px",
        overflow: "hidden",
        backgroundColor: "#eeeeee",
        border: "solid 1px #bdbdbd",
        borderRadius: "16px",
      }}
    >
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={src}
          alt="Cherry Blossom"
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </div>
      <div style={{ padding: "16px" }}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <button
          className="memoDemoBtn"
          style={{ width: "100%" }}
          onClick={sayHi}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
}

export default memo(MemoCard);
