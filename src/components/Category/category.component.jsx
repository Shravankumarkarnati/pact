import React from "react";
import MainCategory from "../MainCategory/mainCategory.component";
import "./category.styles.scss";

import { connect } from "react-redux";

const Category = ({ Categories }) => {
  return (
    <div className="category">
      <MainCategory
        mc={Categories.MainCategories}
        pc={Categories.ProductCategories}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Categories: state.products.Categories,
  };
};

export default connect(mapStateToProps)(Category);
