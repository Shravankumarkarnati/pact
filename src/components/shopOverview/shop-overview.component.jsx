import React from "react";

import ShopItem from "../shopItem/shopItem.component";

import { selectShopDataForPreview } from "../../redux/reducers/products/products.selectors";

import { connect } from "react-redux";

const ShopOverview = ({ shopData }) => {
  return (
    <div className="shop-container">
      {shopData.map((data) => (
        <div key={data.id} className="shop-category">
          <h1 className="shop-category-title">{data.title}</h1>
          <div className="shop-category-items">
            {data.items
              .filter((item, count) => count < 3)
              .map((it) => {
                return <ShopItem key={it.id} item={it} />;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    shopData: selectShopDataForPreview(state),
  };
};

export default connect(mapStateToProps)(ShopOverview);
