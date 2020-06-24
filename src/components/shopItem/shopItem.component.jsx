import React from "react";

const ShopItem = ({ name, image, price }) => {
  return (
    <div className="shop-item">
      <div className="shop-item-details">
        <p className="shop-item-name">{name}</p>
        <p className="shop-item-price">$ {price}</p>
      </div>
      <img className="shop-item-image" src={image} alt={name} />
      <div className="shop-item-shop">Shop Now</div>
    </div>
  );
};

export default ShopItem;
