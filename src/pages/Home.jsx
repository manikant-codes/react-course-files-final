import React from "react";
import InfoRow from "../components/home/InfoRow";
import Carousel from "../components/home/carousel/Carousel";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import FaqsRow from "../components/home/faqsRow/FaqsRow";
import {
  homeAboutUsRowData,
  homeOurJourneyRowData,
} from "../data/homePageData";

function Home() {
  return (
    <>
      <Carousel />
      <InfoRow
        src={homeAboutUsRowData.src}
        title={homeAboutUsRowData.title}
        desc={homeAboutUsRowData.desc}
      />
      <InfoRow
        src={homeOurJourneyRowData.src}
        title={homeOurJourneyRowData.title}
        desc={homeAboutUsRowData.desc}
        contentFirst
      />
      <ServicesRow />
      <PricingRow />
      <FaqsRow />
    </>
  );
}

export default Home;
