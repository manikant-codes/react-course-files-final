import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LabelledIcon({ icon, label }) {
  return (
    <p style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      <FontAwesomeIcon icon={icon} color="#bdbdbd" fontSize={"1.135rem"} />
      <span>{label}</span>
    </p>
  );
}

export default LabelledIcon;
