import React, { useMemo, useState } from "react";
import { UserContext } from "../useContextDemo/UseContextDemo";
import UserProvider, { useUser } from "../useContextDemo/UserProvider";
import Title from "./Title";

// function expensiveCalculation(num) {
//   let temp = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     temp = temp + 1;
//   }
//   return temp + num;
// }

function UseMemoDemo() {
  const [list, setList] = useState(["List Item"]);
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const result = useMemo(
    function () {
      // return expensiveCalculation(count);
      let temp = 0;
      for (let i = 0; i < 1000000000; i++) {
        temp = temp + 1;
      }
      return temp + count;
    },
    [count]
  );

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleAdd() {
    const newList = [...list, input];
    setList(newList);
    setInput("");
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <UserProvider>
      <div style={{ padding: "24px 32px", backgroundColor: "#eeeeee" }}>
        <h2>useMemo Example</h2>
      </div>
      {/* <Title /> */}
      <div
        style={{ display: "flex", padding: "24px 32px 0px 32px", gap: "8px" }}
      >
        <input
          type="text"
          style={{ padding: "6px 16px", flexGrow: 1 }}
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleAdd} className="btnPink">
          Add Item
        </button>
      </div>
      <ul
        style={{
          padding: "32px",
          margin: "0px",
          listStyleType: "none",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {list.map((value, index) => {
          return (
            <li
              key={index}
              style={{
                padding: "12px",
                backgroundColor: "#eeeeee",
                borderRadius: "8px",
              }}
            >
              {value}
            </li>
          );
        })}
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          padding: "32px",
        }}
      >
        <button className="btnPink" onClick={handleDecrement}>
          -
        </button>
        <h2>{result}</h2>
        <button className="btnPink" onClick={handleIncrement}>
          +
        </button>
      </div>
    </UserProvider>
  );
}

export default UseMemoDemo;
