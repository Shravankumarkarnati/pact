import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
  const optionList = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/shop" },
  ];
  return (
    <div className="options">
      {optionList.map((op) => (
        <div key={op.name}>
          <Link to={op.link}>{op.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Options;
