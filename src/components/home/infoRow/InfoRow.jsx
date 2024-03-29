import React from "react";
import Image from "./Image";
import Info from "./Info";
import "../../../styles/home/infoRow.css";

function InfoRow({ contentFirst, image, title, desc }) {
  // const { contentFirst, image, title, desc } = props;

  if (contentFirst) {
    return (
      <div className="infoRowContainer">
        <Info title={title} desc={desc} />
        <Image image={image} />
      </div>
    );
  }
  return (
    <div className="infoRowContainer">
      <Image image={image} />
      <Info title={title} desc={desc} />
    </div>
  );
}

export default InfoRow;
