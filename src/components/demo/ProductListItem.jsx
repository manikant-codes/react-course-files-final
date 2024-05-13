import { Avatar, List } from "flowbite-react";
import React from "react";

function ProductListItem({ product }) {
  const { img, title, price, desc } = product;
  return (
    <List.Item className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <Avatar img={img} alt="Neil image" rounded size="sm" />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
            {title}
          </p>
          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
            {desc}
          </p>
        </div>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
          ${price}
        </div>
      </div>
    </List.Item>
  );
}

export default ProductListItem;
