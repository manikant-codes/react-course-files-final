import React from "react";

function Info(props) {
  return (
    <div className="infoRowContainerInfo">
      <h2 style={{ color: "#4a148c", fontSize: "2rem" }}>{props.title}</h2>
      <p>{props.desc}</p>
      <button style={{ width: "fit-content" }}>Know More</button>
    </div>
  );
}

export default Info;
