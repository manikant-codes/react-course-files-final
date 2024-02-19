import React from "react";
import InfoRow from "../components/home/InfoRow";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import ListRenderingDemo from "../components/demo/ListRenderingDemo";
import PricingRow from "../components/home/pricingRow/PricingRow";

function Home() {
  return (
    <>
      <Navbar />
      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos temporibus omnis minus quae alias molestiae ipsa necessitatibus possimus quaerat reprehenderit ipsam ex perspiciatis provident magnam expedita, consequuntur libero nemo!"
      />
      <InfoRow
        src="/images/04.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos temporibus omnis minus quae alias molestiae ipsa necessitatibus possimus quaerat reprehenderit ipsam ex perspiciatis provident magnam expedita, consequuntur libero nemo!"
        contentFirst
      />
      <ServicesRow />
      <PricingRow />
      <Footer />
    </>
  );
}

export default Home;
