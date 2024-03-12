import React from "react";

function Image(props) {
  return (
    <img
      src={props.image}
      alt=""
      width={75}
      height={75}
      style={{ objectFit: "contain" }}
    />
  );
}

export default Image;
