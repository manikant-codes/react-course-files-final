import { Button, Drawer } from "flowbite-react";
import { HiMinus, HiPlus, HiShoppingCart, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

export function DrawerComponent({ isOpen, toggleDrawer }) {
  const cart = useSelector((store) => {
    return store.cart;
  });

  const dispatch = useDispatch();

  function handleDelete(item) {
    dispatch(removeFromCart(item.id));
  }

  return (
    <Drawer open={isOpen} onClose={toggleDrawer} position="right">
      <Drawer.Header
        title="Cart"
        titleIcon={() => {
          return <HiShoppingCart className="mr-2 h-5 w-5" />;
        }}
      />
      <Drawer.Items>
        <ul className="flex flex-col gap-3 relative h-[calc(100vh_-_96px)]">
          {cart.cartItems.map((item) => {
            return (
              <li key={item.id} className="flex items-center gap-2">
                <img
                  src={item.img}
                  alt=""
                  className="h-14 w-14 rounded-[50%] object-cover"
                />
                <div className="flex flex-col w-full">
                  <div className="flex grow-[1] gap-2">
                    <p className="grow-[1]">{item.title}</p>
                    <p className="font-medium">{item.price}$</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button pill size="xs" gradientDuoTone="greenToBlue">
                      <HiMinus />
                    </Button>
                    {0}
                    <Button pill size="xs" gradientDuoTone="greenToBlue">
                      <HiPlus />
                    </Button>
                  </div>
                </div>
                <Button
                  pill
                  size="xs"
                  gradientDuoTone="greenToBlue"
                  onClick={() => handleDelete(item)}
                >
                  <HiTrash />
                </Button>
              </li>
            );
          })}
          <li className="absolute bottom-0 left-0 right-0">
            <div className="flex items-center">
              <p className="grow-[1] font-medium">Subtotal</p>
              <p>{cart.subTotal}</p>
            </div>
            <div className="flex items-center">
              <p className="grow-[1] font-medium">Tax</p>
              <p>{cart.tax}</p>
            </div>
            <div className="flex items-center">
              <p className="grow-[1] font-medium">Total</p>
              <p>{cart.total}</p>
            </div>
          </li>
        </ul>
      </Drawer.Items>
    </Drawer>
  );
}
