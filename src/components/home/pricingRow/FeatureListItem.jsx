import React from "react";

function FeatureListItem(props) {
  return (
    <>
      {props.isIncluded ? (
        <li>
          <i className="fa-solid fa-check"></i> {props.feature}
        </li>
      ) : (
        <li>
          <i className="fa-solid fa-xmark"></i>{" "}
          <span style={{ textDecoration: "line-through" }}>
            {props.feature}
          </span>
        </li>
      )}
    </>
  );
}

export default FeatureListItem;
