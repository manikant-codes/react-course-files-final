import React, { useEffect, useState } from "react";

function UseEffectResizeDemo() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  console.log(width);

  return <div>{width > 500 && <h1>Hello!</h1>}</div>;
}

export default UseEffectResizeDemo;
