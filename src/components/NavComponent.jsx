import { Button, Navbar } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import { DrawerComponent } from "./Drawer";
import { useState } from "react";

function NavComponent() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/images/trolley.png"
            className="mr-3 h-6 sm:h-9"
            alt="MyShop Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            MyShop
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button pill gradientDuoTone="pinkToOrange" onClick={toggleDrawer}>
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Cart
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="md:[&>ul]:!mt-0">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>

          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default NavComponent;
