import React from "react";

import "./customInput.styles.scss";

const CustomInput = ({ label, handle, name, ...otherProps }) => {
  return (
    <div className="customInput">
      <input
        name={name}
        placeholder={label}
        className="customInput-input"
        onChange={handle}
        {...otherProps}
        required
      />
      <label htmlFor={name} className="customInput-label">
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
