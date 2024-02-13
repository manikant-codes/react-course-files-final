import React from "react";
import ContentFirst from "./ContentFirst";
import ImageFirst from "./ImageFirst";

function InfoRow(props) {
  if (props.contentFirst) {
    return (
      <ContentFirst src={props.src} title={props.title} desc={props.desc} />
    );
  }
  return <ImageFirst src={props.src} title={props.title} desc={props.desc} />;
}

export default InfoRow;
