import React, { useState } from "react";
import { DrawerComponent } from "../components/Drawer";
import NavComponent from "../components/NavComponent";
import ProductsList from "../components/productsList/ProductsList";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <NavComponent toggleDrawer={toggleDrawer} />
      <ProductsList />
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default Home;
