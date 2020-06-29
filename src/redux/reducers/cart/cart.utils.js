export const organizeCart = (cart, item) => {
  const exists = cart.find((cartItem) => cartItem.id === item.id);

  if (exists) {
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cart, { ...item, quantity: 1 }];
};

export const incQuantityItem = (cartItems, item) => {
  const newCart = cartItems.map((cartItem) => {
    if (cartItem.id === item.id) {
      let newItem = cartItem;
      newItem.quantity = cartItem.quantity + 1;
      return newItem;
    } else {
      return cartItem;
    }
  });
  return newCart;
};

export const decQuantityItem = (cartItems, item) => {
  const newCart = cartItems.map((cartItem) => {
    if (cartItem.id === item.id) {
      let newItem = cartItem;
      newItem.quantity = cartItem.quantity - 1;
      return newItem;
    } else {
      return cartItem;
    }
  });
  return newCart.filter((newCartItem) => newCartItem.quantity > 0);
};
