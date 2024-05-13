import { List } from "flowbite-react";
import React from "react";
import { HiCheckCircle } from "react-icons/hi";

function CakeListItem({ product }) {
  const { title } = product;
  return (
    <div>
      <List.Item icon={HiCheckCircle}>{title}</List.Item>
    </div>
  );
}

export default CakeListItem;
