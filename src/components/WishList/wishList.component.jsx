import React from "react";
import bell from "../../images/icons/bell.svg";
import heart from "../../images/icons/heart.svg";
import search from "../../images/icons/search.svg";
import cart from "../../images/icons/supermarket.svg";
import user from "../../images/icons/user.svg";
import Options from "../Options/options.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";

import {
  selectCartItems,
  selectCartItemsCount,
} from "../../redux/reducers/cart/cart.selectors";

import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

const WishList = ({ cartItems, countCartItems }) => {
  return (
    <div className="header--nav-right">
      <div>
        <ul className="header--iconList">
          <li className="header--iconList-item">
            {/* <a href="#" className="header--icon"> */}
            <img src={search} alt="notification" />
            {/* </a> */}
          </li>
          <li className="header--iconList-item">
            {/* <a href="#" className="header--icon"> */}
            <span></span>
            <img src={bell} alt="notification" />
            {/* </a> */}
          </li>

          <li className="header--iconList-item">
            {/* <a href="#" className="header--icon"> */}
            <img src={user} alt="notification" />
            {/* </a> */}
          </li>

          <li className="header--iconList-item">
            {/* <a href="#" className="header--icon"> */}
            <span>32</span>
            <img src={heart} alt="notification" />
            {/* </a> */}
          </li>

          <li className="header--iconList-item">
            <Link to="/checkout" className="header--icon header--icon-cart">
              <span>{countCartItems}</span>
              <img src={cart} alt="notification" className="cart-icon" />
              <div className="cart-dropdown">
                <p>Your Cart</p>
                <div>
                  {cartItems.map((cartItem) => (
                    <CartDropDown key={cartItem.id} item={cartItem} />
                  ))}
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <Options />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  countCartItems: selectCartItemsCount,
});

export default connect(mapStateToProps)(WishList);
