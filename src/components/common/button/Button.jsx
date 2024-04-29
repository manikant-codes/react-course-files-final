import React from "react";
import styles from "./button.module.css";
import PropTypes from "prop-types";

function getClassOutlined(color) {
  switch (color) {
    case "success":
      return styles.btnSuccessOutlined;
    case "error":
      return styles.btnErrorOutlined;
    case "warning":
      return styles.btnWarningOutlined;
    case "info":
      return styles.btnInfoOutlined;
    default:
      return styles.btnPrimaryOutlined;
  }
}

function getClassSolid(color) {
  switch (color) {
    case "success":
      return styles.btnSuccessSolid;
    case "error":
      return styles.btnErrorSolid;
    case "warning":
      return styles.btnWarningSolid;
    case "info":
      return styles.btnInfoSolid;
    default:
      return styles.btnPrimarySolid;
  }
}

function getClassName(variant, color) {
  if (variant === "outlined") {
    return getClassOutlined(color);
  }
  return getClassSolid(color);
}

function Button({
  children,
  onClick,
  variant = "solid",
  color = "primary",
  ...others
}) {
  return (
    <button
      onClick={onClick}
      className={getClassName(variant, color)}
      {...others}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["outlined", "solid"]),
  color: PropTypes.oneOf(["success", "error", "warning", "info"]),
};

export default Button;
