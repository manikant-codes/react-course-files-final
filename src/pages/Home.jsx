import React from "react";
import HeroSection from "../components/home/HeroSection";
import InfoRow from "../components/home/InfoRow";
import CounterRow from "../components/home/counterRow/CounterRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ProgressRow from "../components/home/progressRow/ProgressRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import {
  homeAboutUsRowData,
  homeOurJourneyRowData,
} from "../data/homePageData";
import FaqsRow from "../components/home/faqsRow/FaqsRow";

function Home() {
  return (
    <>
      <HeroSection />
      <InfoRow
        src={homeAboutUsRowData.src}
        title={homeAboutUsRowData.title}
        desc={homeAboutUsRowData.desc}
      />
      <InfoRow
        src={homeOurJourneyRowData.src}
        title={homeOurJourneyRowData.title}
        desc={homeOurJourneyRowData.desc}
        contentFirst
      />
      <ProgressRow />
      <CounterRow />
      <ServicesRow />
      <PricingRow />
      <FaqsRow />
      {/* <ConditionalRenderingDemo marks={2} /> */}
    </>
  );
}

export default Home;
