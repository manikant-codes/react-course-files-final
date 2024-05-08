import React, { useState } from "react";
import NavComponent from "../components/NavComponent";
import ProductsList from "../components/productsList/ProductsList";
import { DrawerComponent } from "../components/Drawer";

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
