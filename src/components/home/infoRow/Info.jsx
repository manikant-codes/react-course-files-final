import React from "react";

function Info(props) {
  return (
    <div className="infoRowContainerInfo">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Info;
