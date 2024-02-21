import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout(props) {
  console.log("props", props);
  return (
    <>
      <Navbar />
      <div style={{ display: "grid", gridTemplateColumns: "250px 1fr" }}>
        <Sidebar />
        {/* <div>{props.children}</div> */}
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
