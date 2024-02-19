import React from "react";
import Hero from "../components/home/Hero";
import ProductsRow from "../components/home/ProductsRow";
import FiguresRow from "../components/home/figuresRow/FiguresRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ProgressRow from "../components/home/progressRow/ProgressRow";
import Layout from "../layouts/Layout";
import "../styles/home/home.css";

function Home() {
  return (
    <>
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
      <ProgressRow />
      <FiguresRow />
      <ProductsRow />
      <PricingRow />
    </>
  );
}

export default Home;
