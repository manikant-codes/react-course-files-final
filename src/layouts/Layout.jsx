import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

function Layout(props) {
  return (
    <>
      <Navbar />
      {/* {props.children} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
