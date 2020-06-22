import React from "react";

import image1 from "../../images/man.jpg";
import image2 from "../../images/women2x.jpg";
import image3 from "../../images/woman-2.jpg";

const allImages = [image1,image2,image3];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
  }

const Display = () => {
    return (
        <div className = "background" >
            <p>SlideShow</p>
        </div>
      )
}


export default Display;