import React, { useState } from "react";

function UseStateCounterDemo() {
  const [count, setCount] = useState(0);

  //   const count = state[0];
  //   const setCount = state[1];

  function decrement() {
    // state[1](state[0] - 1);
    setCount(count - 1);
  }

  function increment() {
    // state[1](state[0] + 1);
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={decrement}>Decrement</button>
      {/* {state[0]} */}
      {count}
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default UseStateCounterDemo;
