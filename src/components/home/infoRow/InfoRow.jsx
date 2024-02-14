import React from "react";
import ContentFirst from "./ContentFirst";
import ImageFirst from "./ImageFirst";

function InfoRow(props) {
  return (
    <>
      {props.contentFirst ? (
        <ContentFirst src={props.src} title={props.title} desc={props.desc} />
      ) : (
        <ImageFirst src={props.src} title={props.title} desc={props.desc} />
      )}
    </>
  );
}

export default InfoRow;
