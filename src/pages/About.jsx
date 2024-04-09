import React from "react";
import Hero from "../components/home/Hero";
import InfoRow from "../components/home/infoRow/InfoRow";

function About() {
  return (
    <>
      <Hero
        image="/images/about-hero.jpg"
        title="About Us"
        desc="🚀 Welcome to Purple Bit, a leading tech firm that's dedicated to delivering innovative solutions for businesses of all sizes! 📈 Our team of experts 🧑‍💻 is committed to providing high-quality products and services that keep you ahead in the rapidly changing digital landscape 🌐. With our customized tech solutions 💡, we're here to help you unlock your business's full potential and achieve new heights of success. Let's work together to build a brighter, more connected future!"
      />
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
        contentFirst
      />
    </>
  );
}

export default About;
