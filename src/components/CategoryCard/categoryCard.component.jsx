import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = (props) => {
  return (
    <Link to={`/${props.linkTo}`}>
      <div className="categoryCard--parent">
        <div
          className="categoryCard"
          style={{ backgroundImage: `url(${props.pic})` }}
        >
          <div className="categoryCard--text">
            <p>{props.cat}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
