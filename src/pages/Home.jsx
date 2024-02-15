import React from "react";
import Hero from "../components/home/Hero";
import ProductsRow from "../components/home/ProductsRow";
import FiguresRow from "../components/home/figuresRow/FiguresRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import "../styles/home/home.css";
import ListRenderingDemo from "../components/demo/ListRenderingDemo";
import PricingRow from "../components/home/pricingRow/PricingRow";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfoRow
        src="/images/04.jpg"
        title="About Us"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum."
      />
      <InfoRow
        src="/images/03.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, voluptatum."
        contentFirst
      />
      <FiguresRow />
      <ProductsRow />
      <PricingRow />
      <Footer />
    </>
  );
}

export default Home;
