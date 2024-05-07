import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout({ setRecipes }) {
  return (
    <div>
      <Navbar setRecipes={setRecipes} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
