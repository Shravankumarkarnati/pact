import React from "react";

import { connect } from "react-redux";

import { cartAddItem } from "../../redux/reducers/cart/cart.action";

const ShopItem = ({ item, cartAddItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <div className="shop-item">
      <div className="shop-item-details">
        <p className="shop-item-name">{name}</p>
        <p className="shop-item-price">$ {price}</p>
      </div>
      <img className="shop-item-image" src={imageUrl} alt={name} />
      <div className="shop-item-btns">
        <button className="shop-item-btns--shop">Shop Now</button>
        <button
          className="shop-item-btns--cart"
          onClick={() => cartAddItem(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartAddItem: (item) => dispatch(cartAddItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(ShopItem);
