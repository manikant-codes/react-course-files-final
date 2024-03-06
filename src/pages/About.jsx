import React from "react";
import Hero from "../components/home/Hero";
import InfoRow from "../components/home/infoRow/InfoRow";
import { homeAboutUsRowData } from "../data/homePageData";

function About() {
  return (
    <>
      <Hero
        src="/images/03.jpg"
        title="About Us"
        desc="Welcome to our cosmetic site! Discover high-quality, cruelty-free
        makeup & skincare. Join our community! 💄✨"
      />
      <InfoRow
        src={homeAboutUsRowData.src}
        title={homeAboutUsRowData.title}
        desc={homeAboutUsRowData.desc}
      />
    </>
  );
}

export default About;
