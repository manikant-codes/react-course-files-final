import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [input, setInput] = useState("");
  //   const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const prevInputRef = useRef("");
  const inputRef = useRef(null);
  //   let count = 0;

  function handleInputChange(e) {
    setInput(e.target.value);
    // setTimesRendered(timesRendered + 1);
  }

  useEffect(() => {
    // setCount(count + 1);
    countRef.current = countRef.current + 1;
    prevInputRef.current = input;
    // document.getElementById("my-input").focus();
    inputRef.current.focus();
    // count += 1;
  }, [input]);

  console.log("rendered");
  console.log("inputRef", prevInputRef);

  console.log("inputRef", inputRef.current);

  return (
    <div>
      <div style={{ padding: "24px 32px", backgroundColor: "#eeeeee" }}>
        <h1>useRef Demo</h1>
      </div>
      <div
        style={{ display: "flex", padding: "24px 32px 0px 32px", gap: "8px" }}
      >
        <input
          ref={inputRef}
          type="text"
          style={{ padding: "6px 16px", flexGrow: 1 }}
          value={input}
          onChange={handleInputChange}
          id="my-input"
        />
      </div>
      <div style={{ padding: "32px" }}>
        <p
          style={{
            fontSize: "2rem",
            backgroundColor: "#eeeeee",
            padding: "12px",
            borderRadius: "8px",
          }}
        >
          {input}
        </p>
        {/* <p style={{ fontSize: "2rem" }}>Rendered: {count}</p> */}
        <p style={{ fontSize: "2rem" }}>Prev State: {prevInputRef.current}</p>
        <p style={{ fontSize: "2rem" }}>Rendered: {countRef.current}</p>
      </div>
    </div>
  );
}

export default UseRefDemo;
