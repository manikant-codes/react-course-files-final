import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          userReducer and Redux
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="[&>ul]:flex [&>ul]:items-center">
        <Link to="/">Home</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComponent;
