import React from "react";
import NavComponent from "./NavComponent";
import FooterComponent from "./FooterComponent";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}

export default Layout;
