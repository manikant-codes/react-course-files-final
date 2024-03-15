import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import ServicesRow from "../components/home/servicesRow/ServicesRow";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesRow />
    </div>
  );
}

export default Home;
