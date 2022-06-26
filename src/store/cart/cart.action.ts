import { cartItemType, productType } from '../../types';
import { SET_CART_ITEMS } from './cart.reducer';

// helper function to change quantity
const changeQty = (
  cartItems: cartItemType[],
  targetProductOrItem: cartItemType | productType,
  operation: 'add' | 'deduct'
) => {
  if (operation === 'add') {
    return cartItems.map((cartItem) =>
      cartItem.id === targetProductOrItem.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === targetProductOrItem.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
    );
  }
};
// helper function to "addItemToCart"
const addCartItem = (cartItems: cartItemType[], productToAdd: productType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  return existingCartItem
    ? changeQty(cartItems, productToAdd, 'add')
    : [...cartItems, { ...productToAdd, qty: 1 }];
};
// helper functoin to "removeItemFromCart"
const removeCartItem = (cartItems: cartItemType[], itemToRemove: cartItemType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === itemToRemove.id);

  return existingCartItem?.qty === 1
    ? clearCartItem(cartItems, itemToRemove)
    : changeQty(cartItems, itemToRemove, 'deduct');
};
// helper function to "removeItemInCart"
const clearCartItem = (cartItems: cartItemType[], itemToClear: cartItemType) =>
  cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);

export const addItemToCart = (cartItems: cartItemType[], productToAdd: productType) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return SET_CART_ITEMS(newCartItems);
};
export const removeItemFromCart = (cartItems: cartItemType[], itemToRemove: cartItemType) => {
  const newCartItems = removeCartItem(cartItems, itemToRemove);
  return SET_CART_ITEMS(newCartItems);
};
export const clearItemInCart = (cartItems: cartItemType[], itemToClear: cartItemType) => {
  const newCartItems = clearCartItem(cartItems, itemToClear);
  return SET_CART_ITEMS(newCartItems);
};
