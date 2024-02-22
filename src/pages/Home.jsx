import React from "react";
import InfoRow from "../components/home/InfoRow";
import Carousel from "../components/home/carousel/Carousel";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";

function Home() {
  return (
    <>
      <Carousel />
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
    </>
  );
}

export default Home;
