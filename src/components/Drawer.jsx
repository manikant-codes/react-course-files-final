"use client";

import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";
import { useSelector } from "react-redux";

export function DrawerComponent({ isOpen, toggleDrawer }) {
  const cartItems = useSelector((store) => {
    return store.cart.cartItems;
  });
  return (
    <>
      <Drawer open={isOpen} onClose={toggleDrawer} position="right">
        <Drawer.Header
          title="Cart"
          titleIcon={() => {
            return <HiShoppingCart className="mr-2 h-5 w-5" />;
          }}
        />
        <Drawer.Items>
          <ul className="flex flex-col gap-4">
            {cartItems.map((cartItem) => {
              return (
                <li className="flex items-center gap-2">
                  <img
                    src={cartItem.img}
                    alt=""
                    className="h-14 w-14 object-cover rounded-[50%]"
                  />
                  <div className="flex flex-col gap-2 grow-[1]">
                    <div className="flex items-center">
                      <p className="grow-[1]">{cartItem.title}</p>
                      <p className="font-medium">{cartItem.price}$</p>
                    </div>
                    <div className="flex gap-2">
                      <Button pill size="xs" gradientDuoTone="pinkToOrange">
                        <HiMinus />
                      </Button>
                      <p>{0}</p>
                      <Button pill size="xs" gradientDuoTone="pinkToOrange">
                        <HiPlus />
                      </Button>
                    </div>
                  </div>

                  <Button pill size="xs" gradientDuoTone="pinkToOrange">
                    <HiTrash />
                  </Button>
                </li>
              );
            })}
          </ul>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
