import React from "react";
import mainLogo from "../../images/logo-p.png";

const IconName = () => {
    return (
        <div className = "header--nav-left">
            <img className = "header-logo" src = {mainLogo} 
                    alt = "Pact Logo"
            />
            <p className = "header-name">
                pact.
            </p>
        </div>
    )
}

export default IconName;