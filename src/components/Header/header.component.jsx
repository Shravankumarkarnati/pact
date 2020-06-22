import React from "react";
import "./header.styles.scss";

import Nav from "../Nav/nav.component";
import Display from "../Display/display.components";

const Header = () => {
    return (
        <div className = "header">
            <Nav />
            <Display />
        </div>
    )
}



export default Header;