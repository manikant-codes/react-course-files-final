import React from "react";
import HeroSection from "../components/home/HeroSection";
import InfoRow from "../components/home/InfoRow";
import Navbar from "../layouts/Navbar";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import Footer from "../layouts/Footer";
import CounterRow from "../components/home/counterRow/CounterRow";
import ConditionalRenderingDemo from "../components/demos/ConditionalRenderingDemo";

function Home() {
  return (
    <>
      <Navbar />
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
      <CounterRow />
      <ServicesRow />
      <Footer />
      {/* <ConditionalRenderingDemo marks={2} /> */}
    </>
  );
}

export default Home;
