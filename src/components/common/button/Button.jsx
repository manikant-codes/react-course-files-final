import React from "react";
import styles from "./button.module.css";

function Button({ children, onClick, variant = "solid", color = "primary" }) {
  function getColor() {
    switch (color) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "info":
        return "blue";
      default:
        return "#ee6b2f";
    }
  }

  function getStyles() {
    if (variant === "outlined") {
      return {
        backgroundColor: "white",
        border: `solid 2px ${getColor()}`,
      };
    }
    return { backgroundColor: getColor(), border: "none" };
  }

  return (
    <button
      onClick={onClick}
      //   className={`${styles.btn} ${
      //     variant === "solid" ? styles.btnSolid : styles.btnOutlined
      //   }`}
      style={getStyles()}
    >
      {children}
    </button>
  );
}

export default Button;
