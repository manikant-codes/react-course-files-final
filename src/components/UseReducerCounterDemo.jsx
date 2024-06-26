import { Button } from "flowbite-react";
import React, { useReducer } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";

function reducer(count, action) {
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
  const [store, dispatch] = useReducer(reducer, 0);

  function increment() {
    dispatch({ type: "INCREMENT" });
  }

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }

  return (
    <div className="flex gap-10">
      <Button onClick={decrement}>
        <HiMinus />
      </Button>
      <p className="text-4xl">{store}</p>
      <Button onClick={increment}>
        <HiPlus />
      </Button>
    </div>
  );
}

export default UseReducerCounterDemo;
