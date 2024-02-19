import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <QuickLinks /> */}
      {/* {props.children} */}
      <Footer />
    </div>
  );
}

export default Layout;
