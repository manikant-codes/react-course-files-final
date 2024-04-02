import React from "react";
import Hero from "../components/home/Hero";
import ClientsRow from "../components/home/clientsRow/ClientsRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import PricingRow from "../components/home/pricingRow/PricingRow";
import ServicesRow from "../components/home/servicesRow/ServicesRow";

function Home() {
  return (
    <div>
      <Hero />
      <ClientsRow />
      <InfoRow
        image="/images/about-info.jpg"
        title="About Us"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non optio
        tempora quas obcaecati porro, quae, dicta voluptate veniam libero
        quaerat ipsum sequi earum a, similique aspernatur natus. Dicta modi
        veritatis vel, cum quaerat deserunt repudiandae mollitia perferendis
        quas consectetur minima adipisci. Harum vero explicabo vel possimus,
        ullam in tempora quis soluta itaque quidem. Odio dicta obcaecati cum
        optio temporibus, porro consequuntur illo ad ipsa aliquid, iure
        explicabo quibusdam culpa natus vero hic neque maiores fugit!"
      />
      <InfoRow
        image="/images/our-story.jpg"
        title="Our Story"
        desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non optio
        tempora quas obcaecati porro, quae, dicta voluptate veniam libero
        quaerat ipsum sequi earum a, similique aspernatur natus. Dicta modi
        veritatis vel, cum quaerat deserunt repudiandae mollitia perferendis
        quas consectetur minima adipisci. Harum vero explicabo vel possimus,
        ullam in tempora quis soluta itaque quidem. Odio dicta obcaecati cum
        optio temporibus, porro consequuntur illo ad ipsa aliquid, iure
        explicabo quibusdam culpa natus vero hic neque maiores fugit!"
        contentFirst={true}
      />
      <ServicesRow />
      <PricingRow />
      {/* <Destructuring /> */}
    </div>
  );
}

export default Home;
