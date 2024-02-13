import React from "react";
import Navbar from "../layouts/Navbar";
import "../styles/home/home.css";
import Footer from "../layouts/Footer";
import ProductsRow from "../components/home/ProductsRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import FiguresRow from "../components/home/figuresRow/FiguresRow";
import Hero from "../components/home/Hero";

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
      <Footer />
    </>
  );
}

export default Home;
