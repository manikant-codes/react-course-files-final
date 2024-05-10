"use client";

import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";

export function DrawerComponent({ isOpen, toggleDrawer }) {
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
          <ul>
            <li className="flex items-center gap-2">
              <img
                src="https://plus.unsplash.com/premium_photo-1684407617236-c60dc693293a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="h-14 w-14 object-cover rounded-[50%]"
              />
              <div className="flex flex-col gap-2 grow-[1]">
                <div className="flex items-center">
                  <p className="grow-[1]">Product name</p>
                  <p className="font-medium">500$</p>
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
          </ul>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
