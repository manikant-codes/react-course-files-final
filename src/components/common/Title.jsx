import React from "react";
import "../../styles/common/title.css";

function Title(props) {
  return (
    <div className="titleContainer">
      <h2 className="title">{props.title}</h2>
      <p className="desc">{props.desc}</p>
    </div>
  );
}

export default Title;
