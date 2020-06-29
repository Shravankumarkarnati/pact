import React from "react";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const shortName = (name) => {
    return name.length > 20 ? `${name.slice(0, 20)}...` : name;
  };
  return (
    <div className="cart-dropdown--item">
      <img className="cart-dropdown--item-image" src={imageUrl} alt={name} />
      <div className="cart-dropdown--item-details">
        <p className="itemName">{shortName(name)}</p>
        <p className="itemPrice">
          {quantity} * $ {price}
        </p>
      </div>
    </div>
  );
};

export default CartDropDown;
