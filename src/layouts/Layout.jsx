import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

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
