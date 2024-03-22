import React from "react";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import ServicesRow from "../components/home/servicesRow/ServicesRow";
import InfoRow from "../components/home/infoRow/InfoRow";
import ConditionalRendering from "../components/demo/ConditionalRendering";
import Modules, { num, name } from "../components/demo/Modules";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
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
      <ConditionalRendering />
      <Modules />
    </div>
  );
}

export default Home;
