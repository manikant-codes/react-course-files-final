import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, getUsers } from "../redux/slices/usersSlice";
import { increment } from "../redux/slices/cartSlice";

function Demo() {
  const users = useSelector((store) => {
    return store.users;
  });

  const dispatch = useDispatch();

  console.log(increment());
  console.log(fetchUsers());
  // console.log(fetchUsers.rejected());
  // console.log(
  //   fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
  //     return response.json();
  //   })
  // );
  // console.log(getUsers());

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);

  if (users.loading) return <h1>Loading...</h1>;
  if (users.error) return <h1>Error...</h1>;

  return <div className="text-6xl">Demo</div>;
}

export default Demo;
