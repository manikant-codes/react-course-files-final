import { Button, Navbar } from "flowbite-react";
import React from "react";

function NavComponent() {
  return (
    <Navbar className="bg-purple-200" fluid rounded>
      <Navbar.Brand>
        <img
          src="/images/logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button pill color="purple">
          Cart
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:[&>ul]:!mt-0">
        <Navbar.Link href="#" active color="purple">
          Home
        </Navbar.Link>
        <Navbar.Link href="#" >
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComponent;
