import React from "react";
import Navbar from "../layouts/Navbar";
import "../styles/home/home.css";
import Footer from "../layouts/Footer";
import ProductsRow from "../components/home/ProductsRow";
import InfoRow from "../components/home/InfoRow";

function Home() {
  return (
    <>
      <Navbar />

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
      <ProductsRow />
      <Footer />
    </>
  );
}

export default Home;
