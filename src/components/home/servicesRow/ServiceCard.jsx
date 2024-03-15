import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ServiceCard(props) {
  return (
    <div className="serviceCardContainer">
      <FontAwesomeIcon icon={props.icon} className="serviceCardIcon" />
      <h3 className="serviceCardTitle">{props.title}</h3>
      <p className="serviceCardDesc">{props.desc}</p>
    </div>
  );
}

export default ServiceCard;
