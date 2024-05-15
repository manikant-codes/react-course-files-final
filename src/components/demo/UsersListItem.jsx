import { List } from "flowbite-react";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";

function UsersListItem({ listItem }) {
  if (!listItem) return null;
  const { name } = listItem;
  return (
    <div>
      <List.Item icon={HiCheckCircle}>{name}</List.Item>
    </div>
  );
}

export default UsersListItem;
