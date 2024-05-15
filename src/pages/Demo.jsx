import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import HOC from "../components/HOC";
import UsersListItem from "../components/demo/UsersListItem";
import { fetchUsers } from "../redux/slices/usersSlice";
import myStore from "../redux/store";

function Demo() {
  const dispatch = useDispatch();

  const users = useSelector((store) => {
    return store.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);

  if (users.loading) return <h1>Loading...</h1>;
  if (users.error) return <h1>Error...</h1>;
  if (!users.users) return null;

  return (
    <ul className="">
      <HOC list={users.users} listItem={UsersListItem} />
    </ul>
  );
}

export default Demo;
