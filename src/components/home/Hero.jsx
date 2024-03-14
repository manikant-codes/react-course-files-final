import React from "react";
import "../../styles/home/hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroImageContainer">
        <img className="heroImage" src="/images/hero.jpg" alt="Hero" />
      </div>
      <div className="heroContentContainer">
        <h2 className="heroTitle">Welcome to Purple Bit</h2>
        <p className="heroDesc">
          Purple Bit - a leading tech firm 🚀 delivering innovative solutions
          for businesses 💼 of all sizes! 📈 Our team of experts 🧑‍💻 provides
          high-quality products & services, keeping you ahead in the rapidly
          changing digital landscape 🌐. Let us unlock your business's full
          potential with customized tech solutions 💡.
        </p>
        <button className="heroBtn">
          Know More <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
}

export default Hero;
