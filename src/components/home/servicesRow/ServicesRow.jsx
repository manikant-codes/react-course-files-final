import React from "react";
import Title from "../../common/Title";
import ServiceCard from "./ServiceCard";
import "../../../styles/home/servicesRow.css";
import {
  faBasketball,
  faBoxesStacked,
  faFile,
  faFileLines,
  faGaugeSimpleMed,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

function ServicesRow() {
  return (
    <div className="servicesRowContainer">
      <Title
        title="Services"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aperiam!"
      />
      <div className="servicesRowContainerInner">
        <ServiceCard
          icon={faBasketball}
          title="Title 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, pariatur."
        />
        <ServiceCard
          icon={faFileLines}
          title="Title 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, pariatur."
        />
        <ServiceCard
          icon={faGaugeSimpleMed}
          title="Title 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, pariatur."
        />
        <ServiceCard
          icon={faLayerGroup}
          title="Title 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, pariatur."
        />
      </div>
    </div>
  );
}

export default ServicesRow;
