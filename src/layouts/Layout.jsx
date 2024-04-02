import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout(props) {
  //   const { children } = props;
  return (
    <>
      <Navbar />
      {/* Page Content */}
      {/* {children} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
