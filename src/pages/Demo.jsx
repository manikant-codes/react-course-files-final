import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/usersSlice";

function Demo() {
  const users = useSelector((store) => {
    return store.users;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  if (users.loading) return <h1>Loading...</h1>;
  if (users.error) return <h1>Error...</h1>;

  return <div className="text-6xl">Demo</div>;
}

export default Demo;
