import { Button, Navbar, useThemeMode } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
  const { toggleMode, mode } = useThemeMode();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        {/* <img
          src="/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Bhagavad Gita
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="[&>ul]:flex [&>ul]:items-center">
        <Button color="failure" onClick={toggleMode}>
          {mode}
        </Button>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComponent;
