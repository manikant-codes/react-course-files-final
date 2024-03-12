import React from "react";
import Image from "./Image";

function PriceCard(props) {
  return (
    <div>
      <Image image={props.image} />
      <h2>{props.title}</h2>
      <p>${props.price}</p>
    </div>
  );
}

export default PriceCard;
