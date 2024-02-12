import React from "react";

function Title(props) {
  return (
    <div style={{ textAlign: "center", marginBottom: "32px" }}>
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
    </div>
  );
}

export default Title;
