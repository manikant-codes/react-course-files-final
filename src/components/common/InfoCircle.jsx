import React from "react";
import styles from "../../styles/common/infoCircle.module.css";

function InfoCircle(props) {
  const { type, measure } = props;

  function getColor() {
    if (type === "carb") {
      return "#f94642";
    } else if (type === "protein") {
      return "#3177bb";
    } else {
      return "#fda120";
    }
  }

  const color = getColor();

  return (
    <div className={styles.containerMain}>
      <div className={styles.circle} style={{ backgroundColor: color }}>
        <p style={{ backgroundColor: color }}>{`${measure} ${type}`}</p>
      </div>
      <p>{measure}</p>
    </div>
  );
}

export default InfoCircle;
