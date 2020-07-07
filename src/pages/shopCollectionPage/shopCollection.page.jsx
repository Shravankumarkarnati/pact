import React from "react";
import "./shopCollection.styles.scss";
import ShopItem from "../../components/shopItem/shopItem.component";

import { connect } from "react-redux";
import { selectShopItem } from "../../redux/reducers/products/products.selectors";

import { Redirect } from "react-router-dom";

const ShopCollection = ({ shopItem }) => {
  if (shopItem === undefined) return <Redirect to="/" />;
  return (
    <div className="shop-collection">
      {shopItem.items.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    shopItem: selectShopItem(ownProps.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(ShopCollection);
