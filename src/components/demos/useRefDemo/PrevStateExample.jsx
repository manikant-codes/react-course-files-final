import React, { useEffect, useRef, useState } from "react";

function PrevStateExample() {
  const [input, setInput] = useState("");
  //   const [prevInput, setPrevInput] = useState("");

  const inputRef = useRef(null);

  const prevRef = useRef("");

  console.log("Rendered");

  useEffect(() => {
    // prevRef.current = input;
    // console.log(prevRef);
    // countRef.current += 1;

    inputRef.current.focus();

    console.log(inputRef.current);
  }, [input]);

  function handleChange(e) {
    setInput(e.target.value);
  }

  console.log("inputRef", inputRef.current);

  return (
    <div style={{ padding: "32px" }}>
      <div>
        <input
          ref={inputRef}
          type="text"
          onChange={handleChange}
          value={input}
        />
        {/* <p style={{ fontSize: "2rem" }}>prevInput: {prevInput}</p> */}
        <p style={{ fontSize: "2rem" }}>prevInput:{prevRef.current}</p>
      </div>
    </div>
  );
}

export default PrevStateExample;
