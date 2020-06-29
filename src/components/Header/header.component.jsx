import React from "react";
import IconName from "../IconName/iconName.component";
import WishList from "../WishList/wishList.component";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header--nav">
        <IconName />
        <WishList />
      </div>
    </div>
  );
};

export default Header;
