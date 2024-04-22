import React, { useEffect, useRef, useState } from "react";

function UseRefDemo() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const countRef = useRef(1);

  console.log("Rendered");

  useEffect(() => {
    // setCount(count + 1);
    countRef.current += 1;
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <div style={{ padding: "32px" }}>
      <div>
        <input type="text" onChange={handleChange} value={input} />
        <p style={{ fontSize: "2rem" }}>Times Rendered: {countRef.current}</p>
        {/* <p style={{ fontSize: "2rem" }}>Times Rendered: {count}</p> */}
      </div>
    </div>
  );
}

export default UseRefDemo;
