import { Button } from "flowbite-react";
import React, { useReducer, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

function reducer(count, action) {
  //   if (action.type === "INCREMENT") {
  //     return count + 1;
  //   } else if (action.type === "DECREMENT") {
  //     return count - 1;
  //   } else {
  //     return count;
  //   }
  switch (action.type) {
    case "INCREMENT":
      return count + 1;
    case "DECREMENT":
      return count - 1;
    default:
      return count;
  }
}

function UseReducerCounterDemo() {
  //   const [count, setCount] = useState(0);
  const [count, dispatch] = useReducer(reducer, 0);

  function increment() {
    // setCount(count + 1);
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    // setCount(count - 1);
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div className="flex gap-10">
      <Button onClick={decrement}>
        <HiMinus />
      </Button>
      <p className="text-4xl">{count}</p>
      <Button onClick={increment}>
        <HiPlus />
      </Button>
    </div>
  );
}

export default UseReducerCounterDemo;
