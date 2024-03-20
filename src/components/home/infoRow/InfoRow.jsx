import React from "react";
import Image from "./Image";
import Info from "./Info";
import "../../../styles/home/infoRow.css";

function InfoRow(props) {
  if (props.contentFirst) {
    return (
      <div className="infoRowContainer">
        <Info title={props.title} desc={props.desc} />
        <Image image={props.image} />
      </div>
    );
  }
  return (
    <div className="infoRowContainer">
      <Image image={props.image} />
      <Info title={props.title} desc={props.desc} />
    </div>
  );
}

export default InfoRow;
