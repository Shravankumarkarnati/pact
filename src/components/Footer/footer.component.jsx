import React from "react";
import "./footer.style.scss";

import FooterLeft from "../FooterLeft/footerLeft.component";
import FooterRight from "../FooterRight/footerRight.component";

const Footer = () => {
    return(
        <div className = "footer">
            <FooterLeft/>
            <FooterRight/>
        </div>
    )
}

export default Footer;