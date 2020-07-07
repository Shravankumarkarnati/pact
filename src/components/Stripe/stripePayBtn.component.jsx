import React from "react";
import StripeCheckout from "react-stripe-checkout";

import logo from "../../images/logo-w.png";

const StripeBtn = ({ price }) => {
  const stripeOnSubmit = (token) => {
    console.log("Stripe Payment", token);
    alert("Payment Done!!!!");
  };
  const priceToPay = price * 100;
  const key =
    "pk_test_51H26aaFiT1GCtDjGadHieo385OnEvF4jGJObgpRdRnmCyEIuZHu7wzMfbBp4If5dltUbgDZFY1s5duVOsoTYLVkh00KMBDJ1qh";
  return (
    <div className="stripeBtn">
      <StripeCheckout
        name="Pact Corp."
        description={`Your total is $${price}`}
        image={logo}
        ComponentClass="div"
        panelLabel="You guys are getting paid???"
        amount={priceToPay}
        currency="USD"
        stripeKey={key}
        locale="en"
        shippingAddress
        billingAddress
        token={stripeOnSubmit}
      />
    </div>
  );
};

export default StripeBtn;
