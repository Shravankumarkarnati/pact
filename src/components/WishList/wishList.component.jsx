import React from "react";
import bell from "../../images/icons/bell.svg";
import heart from "../../images/icons/heart.svg";
import search from "../../images/icons/search.svg";
import cart from "../../images/icons/supermarket.svg";
import user from "../../images/icons/user.svg";
import Options from "../Options/options.component";
const WishList = () => {
  return (
    <div className="header--nav-right">
      <div>
        <ul className="header--iconList">
          <li className="header--iconList-item">
            <a href="#" className="header--icon">
              <img src={search} alt="notification" />
            </a>
          </li>
          <li className="header--iconList-item">
            <a href="#" className="header--icon">
              <span></span>
              <img src={bell} alt="notification" />
            </a>
          </li>

          <li className="header--iconList-item">
            <a href="#" className="header--icon">
              <img src={user} alt="notification" />
            </a>
          </li>

          <li className="header--iconList-item">
            <a href="#" className="header--icon">
              <span>32</span>
              <img src={heart} alt="notification" />
            </a>
          </li>

          <li className="header--iconList-item">
            <a href="#" className="header--icon">
              <span>12</span>
              <img src={cart} alt="notification" />
            </a>
          </li>
        </ul>
      </div>
      <Options />
    </div>
  );
};

export default WishList;
