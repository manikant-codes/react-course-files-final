import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/slices/userSlice";

function Users() {
  const user = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (user.loading) return <p>Loading...</p>;
  if (user.error) return <p>{user.error}...</p>;
  if (!user.users) return <p>Something went wrong...</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl mb-4">Users</h2>
      <ul className="flex flex-col gap-2">
        {user.users.map((user) => {
          return <li className="bg-purple-200 p-2 rounded-lg">{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
