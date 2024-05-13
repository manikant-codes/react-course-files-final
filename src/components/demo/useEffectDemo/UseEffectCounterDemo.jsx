import React, { useEffect, useState } from "react";

const msgs = ["Breath In...", "Hold...", "Breath Out...", "Hold..."];

function UseEffectCounterDemo() {
  const [count, setCount] = useState(4);
  const [msg, setMsg] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (count > 1) {
        setCount(count - 1);
      } else {
        setCount(4);
        if (msg < 3) {
          setMsg(msg + 1);
        } else {
          setMsg(0);
        }
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [count, msg]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        fontSize: "8rem",
      }}
    >
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "solid 4px black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <p>{count}</p>
        <p
          style={{
            fontSize: "2rem",
            position: "absolute",
            top: "-50px",
            color: `${msg === 0 ? "red" : "black"}`,
          }}
        >
          {msgs[0]}
        </p>
        <p
          style={{
            fontSize: "2rem",
            position: "absolute",
            right: "-100px",
            color: `${msg === 1 ? "red" : "black"}`,
          }}
        >
          {msgs[1]}
        </p>
        <p
          style={{
            fontSize: "2rem",
            position: "absolute",
            bottom: "-50px",
            color: `${msg === 2 ? "red" : "black"}`,
          }}
        >
          {msgs[2]}
        </p>
        <p
          style={{
            fontSize: "2rem",
            position: "absolute",
            left: "-100px",
            color: `${msg === 3 ? "red" : "black"}`,
          }}
        >
          {msgs[3]}
        </p>
      </div>
    </div>
  );
}

export default UseEffectCounterDemo;
