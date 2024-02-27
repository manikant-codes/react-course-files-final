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

import number from "../data/homePageData";

function Home() {
  // const obj = {
  //   name: "Manikant",
  //   roll: 10,
  //   branch: "CSE",
  // };

  // const name = obj.name;
  // const roll = obj.roll;
  // const branch = obj.branch;

  // const { roll, name, branch } = obj;

  // console.log("name", name);
  // console.log("roll", roll);
  // console.log("branch", branch);

  const arr = [10, "Manikant", "CSE"];

  // const roll = arr[0];
  // const name = arr[1];
  // const branch = arr[2];

  const [roll, name, branch] = arr;

  console.log("name", name);
  console.log("roll", roll);
  console.log("branch", branch);

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

      {/* <ConditionalRenderingDemo marks={2} /> */}
    </>
  );
}

export default Home;
