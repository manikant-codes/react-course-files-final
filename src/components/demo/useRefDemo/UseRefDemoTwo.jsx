import React, { useEffect, useRef, useState } from "react";

function UseRefDemoTwo() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(-1);
  const countRef = useRef(0);
  let countt = 0;
  function handleChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    // setCount(count + 1);
    countRef.current += 1;
  }, [text]);

  console.log("rendered");

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Render Count: {countRef.current}</p>
    </div>
  );
}

export default UseRefDemoTwo;
