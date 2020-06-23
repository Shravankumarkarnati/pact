import React from "react";
import mainLogo from "../../images/logo-p.png";

const FooterLeft = () => {
  return (
    <div className="FooterLeft">
      <img className="footer-logo" src={mainLogo} alt="Pact Logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
        sapien eget justo fermentum egestas. Phasellus dignissim tempus magna
        nec malesuada. Quisque vestibulum urna quis ornare porttitor. Nullam id
        ligula leo. Ut cursus lorem arcu, ac egestas magna pellentesque quis.
        Cras vel magna dictum, ullamcorper dui mollis, placerat odio. Maecenas
        in metus at ipsum vulputate tempus quis eu risus.
      </p>
    </div>
  );
};

export default FooterLeft;
