import React from "react";
import MainCategory from "../MainCategory/mainCategory.component";
import "./category.styles.scss";

import men from "../../images/Category/Main/men.jpg";
import women from "../../images/Category/Main/women.jpg";
import kids from "../../images/Category/Main/kids.jpg";
import unisex from "../../images/Category/Main/unisex.jpg";

import fashion from "../../images/Category/Product/fashion.jpg";
import books from "../../images/Category/Product/books.jpg";
import health from "../../images/Category/Product/health.jpg";
import tech from "../../images/Category/Product/tech.jpg";
import toys from "../../images/Category/Product/toys.jpg";

const Category = () => {
  const MainCategories = [
    { id: 1, cat: "Mens", pic : men },
    { id: 2, cat: "Womens", pic : women },
    { id: 3, cat: "kids", pic : kids },
    { id: 4, cat: "Unisex", pic : unisex },
  ];

  const ProductCategories = [
    {id : 1, cat : "Fashion,Clothing and Accessories", pic : fashion},
    {id : 3, cat : "Toys and Baby Equipment", pic : toys},
    {id : 4, cat : "Books,CD's and physical media", pic : books},
    {id : 5, cat : "Technology", pic : tech},
    {id : 2, cat : "Health and Beauty", pic : health},
  ];

  return (
    <div className="category">
      <MainCategory mc={MainCategories} pc = {ProductCategories}/>
    </div>
  );
};

export default Category;
