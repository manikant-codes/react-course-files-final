import { Button, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function NavComponent() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/">
        <img
          src="/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Seven News
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <SearchBar />
      <Navbar.Collapse className="[&>ul]:flex [&>ul]:items-center">
        <Button color="failure">Light</Button>
        <Link to="/" active>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavComponent;
