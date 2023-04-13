import React from "react";

import "./Button.scss";

export const BUTTON_CLASSES = {
  default: "default-button",
  yellow: "yellow-button",
  inverted: "inverted-button",
};

const Button = ({ text, buttonType, ...otherProps }) => {
  return (
    <button className={buttonType} {...otherProps}>
      {text}
    </button>
  );
};

export default Button;
