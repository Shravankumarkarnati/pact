import React from "react";

const CategoryCard = (props) => {
    return (
        <div className = "categoryCard--parent">
        <div className = 'categoryCard' style = {{backgroundImage:`url(${props.pic})`}} >
                <div className = "categoryCard--text">
                    <p>{props.cat}</p>
                </div>
        </div>
        </div>
    )  
}

export default CategoryCard;