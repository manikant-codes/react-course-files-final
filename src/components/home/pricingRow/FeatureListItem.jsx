import React from "react";

function FeatureListItem(props) {
  return (
    <>
      {props.hasFeature ? (
        <div>
          <p key={1}>
            <i className="fa-solid fa-check"></i>
            <span>{props.feature}</span>
          </p>
        </div>
      ) : (
        <div>
          <p key={1}>
            <i className="fa-solid fa-xmark"></i>
            <span style={{ textDecoration: "line-through" }}>
              {props.feature}
            </span>
          </p>
        </div>
      )}
    </>
  );
}

export default FeatureListItem;
