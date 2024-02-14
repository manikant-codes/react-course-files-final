import CountUp from "react-countup";
import React from "react";

function Figure(props) {
  console.log("props", props.figure);
  return (
    <div>
      <h3>
        <CountUp end={props.figure} duration={5} />+
      </h3>
      <p>{props.desc}</p>
    </div>
  );
}

export default Figure;
