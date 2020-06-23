import React from "react";
import CategoryCard from "../CategoryCard/categoryCard.component";

const MainCategory = (props) => {
  return (
    <div className="categories">
      <div className="MainCategory">
        {props.mc.map((prop) => (
          <CategoryCard key={prop.id} cat={prop.cat} pic = {prop.pic}/>
        ))}
      </div>
      <div className="ProductCategory"> 
        {props.pc.map((prop) => (
          <CategoryCard key={prop.id} cat={prop.cat} pic = {prop.pic}/>
        ))}
      </div>
    </div>
  );
};

export default MainCategory;
