import { createContext, MouseEventHandler, ReactNode, useReducer } from 'react';
import {
  cartContextType,
  emptyObj,
  itemInCartType,
  productsType,
  cartStates,
  cartAction,
  cartActionKind,
} from '../types';

const reducer = (state: cartStates, action: cartAction) => {
  const { type, payload } = action;

  if (typeof payload === 'boolean') {
    switch (type) {
      case cartActionKind.SET_IS_CART_OPEN:
        return {
          ...state,
          isCartOpen: payload,
        };
      default:
        throw new Error();
    }
  } else {
    const { newCartItems, newCartCount, newCartTotal } = payload;
    switch (type) {
      case cartActionKind.SET_CART_ITEMS:
        return {
          ...state,
          itemsInCart: newCartItems,
          sumOfCartItems: newCartCount,
          cartTotal: newCartTotal,
        };
      default:
        throw new Error();
    }
  }
};

const INITIAL_STATES: cartStates = {
  isCartOpen: false,
  itemsInCart: [] as itemInCartType[],
  sumOfCartItems: 0,
  cartTotal: 0,
};

// helper function to "addItemToCart"
const addCartItem = (cartItems: itemInCartType[], pdtToAdd: productsType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === pdtToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === pdtToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
  }
  return [...cartItems, { ...pdtToAdd, qty: 1 }];
};

// helper functoin to "addQty" and "deductQty"
const changeQty = (cartItems: itemInCartType[], tgtItem: itemInCartType, ops: 'add' | 'deduct') => {
  if (ops == 'add') {
    return cartItems.map((cartItem) =>
      cartItem.id === tgtItem.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
  } else {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === tgtItem.id);

    if (existingCartItem?.qty === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== tgtItem.id);
    }

    return cartItems.map((cartItem) =>
      cartItem.id === tgtItem.id ? { ...cartItem, qty: cartItem.qty - 1 } : cartItem
    );
  }
};

// helper function to "removeItemInCart"
const removeItem = (cartItems: itemInCartType[], tgtItem: itemInCartType) =>
  cartItems.filter((cartItem) => cartItem.id !== tgtItem.id);

export const CartContext = createContext<cartContextType | emptyObj>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATES);
  const { itemsInCart } = state;

  const updateCartItemReducer = (newCartItems: itemInCartType[]) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.qty, 0);
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.qty * cartItem.price,
      0
    );

    dispatch({
      type: cartActionKind.SET_CART_ITEMS,
      payload: {
        newCartItems: newCartItems,
        newCartCount: newCartCount,
        newCartTotal: newCartTotal,
      },
    });
  };

  const setIsCartOpen = (bool: boolean) => {
    dispatch({ type: cartActionKind.SET_IS_CART_OPEN, payload: bool });
  };

  // close cart drop down
  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsCartOpen(false);
  };

  // add new item to cart
  const addItemToCart = (pdt: productsType) => {
    const newCartItems = addCartItem(itemsInCart, pdt);
    updateCartItemReducer(newCartItems);
  };

  // add quantity to item in cart
  const addQty = (item: itemInCartType) => {
    const newCartItems = changeQty(itemsInCart, item, 'add');
    updateCartItemReducer(newCartItems);
  };

  // deduct quantity to item in cart
  const deductQty = (item: itemInCartType) => {
    const newCartItems = changeQty(itemsInCart, item, 'deduct');
    updateCartItemReducer(newCartItems);
  };

  // remove item in cart
  const removeItemInCart = (item: itemInCartType) => {
    const newCartItems = removeItem(itemsInCart, item);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    ...state,
    setIsCartOpen,
    closeCart,
    addItemToCart,
    addQty,
    deductQty,
    removeItemInCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
