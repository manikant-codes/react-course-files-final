import React from "react";
import InfoRow from "../components/home/InfoRow";
import Carousel from "../components/home/carousel/Carousel";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";

import { homeAboutRowData, homeOurJourneyRowData } from "../data/data";
import kuchbhi from "../data/data";
import FaqsRow from "../components/home/faqsRow/FaqsRow";

function Home() {
  console.log("num", kuchbhi);

  return (
    <>
      <Carousel />
      <InfoRow
        src={homeAboutRowData.src}
        title={homeAboutRowData.title}
        desc={homeAboutRowData.desc}
      />
      <InfoRow
        src={homeOurJourneyRowData.src}
        title={homeOurJourneyRowData.title}
        desc={homeAboutRowData.desc}
        contentFirst
      />
      <FaqsRow />
      <ServicesRow />
      <PricingRow />
    </>
  );
}

export default Home;
