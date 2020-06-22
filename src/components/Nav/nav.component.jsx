import React from "react";
import IconName from "../IconName/iconName.component";
import WishList from "../WishList/wishList.component";

const Nav = () => {
    return (
        <div className = "header--nav">
            <IconName />
            <WishList/>    
        </div>
    )
}

export default Nav;