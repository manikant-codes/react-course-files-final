import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [input, setInput] = useState("");
  // const [count, setCount] = useState(-1);
  // let count = 0;

  const countRef = useRef(0);
  const inputRef = useRef("");
  const inputElementRef = useRef(null);

  console.log("countRef", countRef);

  // const countRef = useRef(0);
  // const inputRef = useRef("");
  // const inputElementRef = useRef(null);

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log("rendered");

  // useEffect(() => {
  // setCount(count + 1);
  // count += 1;
  // countRef.current += 1;
  // inputRef.current = input;
  // inputElementRef.current.focus();
  // document.getElementById("myInput").focus();
  // }, [input]);

  useEffect(() => {
    // setCount(count + 1);
    // count += 1;
    // console.log(count);
    // countRef.current += 1;
    // inputRef.current = input;
    inputElementRef.current.focus();
  }, [input]);

  return (
    <div style={{ padding: "32px", display: "flex", flexDirection: "column" }}>
      <input
        // ref={inputElementRef}
        id="myInput"
        type="text"
        style={{ flexGrow: 1, padding: "8px" }}
        value={input}
        onChange={handleChange}
        ref={inputElementRef}
      />
      <p style={{ fontSize: "2rem", marginTop: "16px" }}>{input}</p>
      <p style={{ fontSize: "2rem", marginTop: "8px" }}>
        Times Re-rendered: {countRef.current}
      </p>
      <p style={{ fontSize: "2rem", marginTop: "8px" }}>
        Prev Value: {inputRef.current}
      </p>
    </div>
  );
}

export default UseRefDemo;
