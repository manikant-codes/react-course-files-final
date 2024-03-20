import React from "react";

function Image(props) {
  return (
    <div className="infoRowImageContainer">
      <img src={props.image} alt="" className="infoRowImageContainerImage" />
    </div>
  );
}

export default Image;
