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
import FaqsRow from "../components/home/faqsRow/FaqsRow";
import Contact from "./Contact";

function Home(props) {
  return (
    <>
      <Hero
        src="/images/05.jpg"
        title="Transform Your Beauty Routine with Radiant, Confidence-Boosting
          Cosmetics"
        desc="Welcome to our cosmetic site! Discover high-quality, cruelty-free
        makeup & skincare. Join our community! 💄✨"
      />
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
      <FaqsRow />
      <Contact containerStyles={{ backgroundColor: "#d1c4e9" }} />
    </>
  );
}

export default Home;
