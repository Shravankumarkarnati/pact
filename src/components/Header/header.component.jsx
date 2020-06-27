import React from "react";
import IconName from "../IconName/iconName.component";
import WishList from "../WishList/wishList.component";
import "./header.styles.scss";

const Nav = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="header--nav">
        <IconName />
        <WishList currentUser={currentUser} />
      </div>
    </div>
  );
};

export default Nav;
