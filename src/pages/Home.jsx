import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/slices/counterSlice";

function Home() {
  const count = useSelector((store) => {
    return store.counter.count;
  });
  
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increase());
  }
  function handleDecrease() {
    dispatch(decrease());
  }

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      {count}
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Home;
