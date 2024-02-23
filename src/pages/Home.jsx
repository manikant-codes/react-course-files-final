import React from "react";
import InfoRow from "../components/home/InfoRow";
import Carousel from "../components/home/carousel/Carousel";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import { homeAboutRowData, homeOurJourneyRowData } from "../data/data";
import kuchbhi from "../data/data";

function Home() {
  console.log("num", kuchbhi);
  // const obj = {
  //   name: "ASD",
  //   number: 10,
  // };

  // const num1 = arr[0];
  // const num2 = arr[1];
  // const str = arr[2];

  // const { name: kuchbhi, number } = obj;
  // console.log("kuchbhi", kuchbhi);
  // console.log("obj.number", number);

  // console.log("arr[0]", num1);
  // console.log("arr[1]", num2);
  // console.log("arr[2]", n3);

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
      <ServicesRow />
      <PricingRow />
    </>
  );
}

export default Home;
