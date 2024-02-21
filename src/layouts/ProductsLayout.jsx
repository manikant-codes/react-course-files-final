import React from "react";
import ProductsNavbar from "./ProductsNavbar";
import { Outlet } from "react-router";

function ProductsLayout() {
  return (
    <>
      <ProductsNavbar />
      <Outlet />
    </>
  );
}

export default ProductsLayout;
