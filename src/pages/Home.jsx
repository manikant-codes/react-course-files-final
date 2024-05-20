import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/slices/counterSlice";
import { fetchUsers } from "../redux/slices/usersSlice";

function Home() {
  const count = useSelector((store) => {
    return store.counter.count;
  });
  const users = useSelector((store) => {
    return store.users;
  });

  console.log("users", users);

  const dispatch = useDispatch();

  function handleIncrease() {
    const action = increase();
    console.log("action", action);
    dispatch(action);
  }
  function handleDecrease() {
    dispatch(decrease());
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <button onClick={handleDecrease}>-</button>
      {count}
      <button onClick={handleIncrease}>+</button>
    </div>
  );
}

export default Home;
