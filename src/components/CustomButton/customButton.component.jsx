import React from "react";

import "./customButton.styles.scss";

const CustomButton = ({ newClass, text, color, ...otherProps }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`customButton ${newClass}`}
      {...otherProps}
    >
      {text}
    </button>
  );
};

export default CustomButton;
