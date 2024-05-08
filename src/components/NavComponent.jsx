import { Button, Navbar } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";

function NavComponent({ toggleDrawer }) {
  return (
    <Navbar fluid rounded className="bg-zinc-50 border-b-2">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/images/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          MyShop
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button pill gradientDuoTone="greenToBlue" onClick={toggleDrawer}>
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
  );
}

export default NavComponent;
