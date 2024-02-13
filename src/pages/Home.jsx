import React from "react";
import HeroSection from "../components/home/HeroSection";
import InfoRow from "../components/home/InfoRow";
import Navbar from "../layouts/Navbar";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import Footer from "../layouts/Footer";

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
      <ServicesRow />
      <Footer />
    </>
  );
}

export default Home;
