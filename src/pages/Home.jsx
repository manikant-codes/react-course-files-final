import React from "react";
import InfoRow from "../components/home/InfoRow";
import Footer from "../layouts/Footer";
import Navbar from "../layouts/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <InfoRow
        src="/images/01.jpg"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dignissimos temporibus omnis minus quae alias molestiae ipsa necessitatibus possimus quaerat reprehenderit ipsam ex perspiciatis provident magnam expedita, consequuntur libero nemo!"
      />
      <Footer />
    </>
  );
}

export default Home;
