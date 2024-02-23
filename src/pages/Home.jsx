import React from "react";
import Hero from "../components/home/Hero";
import ProductsRow from "../components/home/ProductsRow";
import FiguresRow from "../components/home/figuresRow/FiguresRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ProgressRow from "../components/home/progressRow/ProgressRow";
import "../styles/home/home.css";
import {
  homeAboutUsRowData,
  homeOurJourneyRowData,
} from "../data/homePageData";

function Home() {
  return (
    <>
      <Hero />
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
      <FiguresRow />
      <ProductsRow />
      <PricingRow />
    </>
  );
}

export default Home;
