import React from "react";
import HeroSection from "../components/home/HeroSection";
import InfoRow from "../components/home/InfoRow";
import CounterRow from "../components/home/counterRow/CounterRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ProgressRow from "../components/home/progressRow/ProgressRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoRow
        src="/images/03.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aspernatur reprehenderit possimus adipisci laudantium voluptatibus
          cumque vel quisquam necessitatibus esse?"
      />
      <InfoRow
        src="/images/04.jpg"
        title="Our Journey"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aspernatur reprehenderit possimus adipisci laudantium voluptatibus
          cumque vel quisquam necessitatibus esse?"
        contentFirst={true}
      />
      <ProgressRow />
      <CounterRow />
      <ServicesRow />
      <PricingRow />

      {/* <ConditionalRenderingDemo marks={2} /> */}
    </>
  );
}

export default Home;
