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

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      Categories: {
        MainCategories: [
          { id: 1, cat: "Mens", pic: men, linkTo: "mens" },
          { id: 2, cat: "Womens", pic: women, linkTo: "womens" },
          { id: 3, cat: "kids", pic: kids, linkTo: "kids" },
          { id: 4, cat: "Unisex", pic: unisex, linkTo: "unisex" },
        ],

        ProductCategories: [
          {
            id: 1,
            cat: "Fashion,Clothing and Accessories",
            pic: fashion,
            linkTo: "fashion",
          },
          { id: 3, cat: "Toys and Baby Equipment", pic: toys, linkTo: "toys" },
          {
            id: 4,
            cat: "Books,CD's and physical media",
            pic: books,
            linkTo: "books",
          },
          { id: 5, cat: "Technology", pic: tech, linkTo: "tech" },
          { id: 2, cat: "Health and Beauty", pic: health, linkTo: "health" },
        ],
      },
    };
  }

  render() {
    return (
      <div className="category">
        <MainCategory
          mc={this.state.Categories.MainCategories}
          pc={this.state.Categories.ProductCategories}
        />
      </div>
    );
  }
}

export default Category;
