import React from "react";

const FooterRight = () => {
  const footerElements = [
    { key: 1, value: "About" },
    { key: 2, value: "Services" },
    { key: 3, value: "Pages" },
    { key: 4, value: "Contact" },
    { key: 5, value: "Shop" },
    { key: 6, value: "Contact Us" },
  ];

  return (
    <div className="FooterRight">
      <ul className="elements-list">
        {footerElements.map((element) => (
          <li key={element.key} className="element">
            {element.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterRight;
