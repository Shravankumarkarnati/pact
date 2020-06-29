import React from "react";
import "./checkout.styles.scss";

import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsPrice,
} from "../../redux/reducers/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import {
  removeItemFromCheckout,
  incItemQuantity,
  decItemQuantity,
} from "../../redux/reducers/cart/cart.action";

function CheckOutHeader() {
  return (
    <div className="checkout-header">
      <div className="checkout-header--item">
        <span>Product</span>
      </div>
      <div className="checkout-header--item">
        <span>Description</span>
      </div>
      <div className="checkout-header--item">
        <span>Quantity</span>
      </div>
      <div className="checkout-header--item">
        <span>Price</span>
      </div>
      <div className="checkout-header--item">
        <span>Remove</span>
      </div>
    </div>
  );
}

function CheckOutFooter({ price }) {
  return (
    <div className="checkout-footer">
      <div className="checkout-footer--item">
        <span className="total-text">Total</span>
      </div>
      <div className="checkout-footer--item">
        <span className="total-price">$ {price}</span>
      </div>
    </div>
  );
}

function CheckOutTableItem({ item, removeItem, incQuantity, decQuantity }) {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-table-item">
      <div className="checkout-table-item--details">
        <span className="detail-image">
          <img src={imageUrl} alt={name} />
        </span>
      </div>
      <div className="checkout-table-item--details">
        <span className="detail-name">{name}</span>
      </div>
      <div className="checkout-table-item--details">
        <button
          className="detail-quantity-minus"
          onClick={() => decQuantity(item)}
        >
          -
        </button>

        <span className="detail-quantity">{quantity}</span>

        <button
          className="detail-quantity-plus"
          onClick={() => incQuantity(item)}
        >
          +
        </button>
      </div>
      <div className="checkout-table-item--details">
        <span className="detail-price">{price}</span>
      </div>
      <div className="checkout-table-item--details">
        <button className="detail-remove" onClick={() => removeItem(item)}>
          X
        </button>
      </div>
    </div>
  );
}

const CheckOut = ({
  cartItems,
  totalPrice,
  removeItem,
  incQuantity,
  decQuantity,
}) => {
  return (
    <div className="checkout">
      <CheckOutHeader />
      {cartItems.map((item) => (
        <CheckOutTableItem
          key={item.id}
          item={item}
          removeItem={removeItem}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      ))}

      <CheckOutFooter price={totalPrice} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalPrice: selectCartItemsPrice,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => dispatch(removeItemFromCheckout(item)),
    incQuantity: (item) => dispatch(incItemQuantity(item)),
    decQuantity: (item) => dispatch(decItemQuantity(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
