import { createContext, MouseEventHandler, ReactNode, useReducer } from 'react';
import {
  cartContextType,
  emptyObj,
  cartItemType,
  productType,
  cartState,
  cartAction,
  cartActionKind,
} from '../types';

const reducer = (state: cartState, action: cartAction) => {
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

const INITIAL_STATES: cartState = {
  isCartOpen: false,
  itemsInCart: [] as cartItemType[],
  sumOfCartItems: 0,
  cartTotal: 0,
};

// helper function to "addItemToCart"
const addCartItem = (cartItems: cartItemType[], pdtToAdd: productType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === pdtToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === pdtToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
  }
  return [...cartItems, { ...pdtToAdd, qty: 1 }];
};

// helper functoin to "addQty" and "deductQty"
const changeQty = (cartItems: cartItemType[], tgtItem: cartItemType, ops: 'add' | 'deduct') => {
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
const removeItem = (cartItems: cartItemType[], tgtItem: cartItemType) =>
  cartItems.filter((cartItem) => cartItem.id !== tgtItem.id);

export const CartContext = createContext<cartContextType | emptyObj>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATES);
  const { itemsInCart } = state;

  const updateCartItemReducer = (newCartItems: cartItemType[]) => {
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
  const addItemToCart = (pdt: productType) => {
    const newCartItems = addCartItem(itemsInCart, pdt);
    updateCartItemReducer(newCartItems);
  };

  // add quantity to item in cart
  const addQty = (item: cartItemType) => {
    const newCartItems = changeQty(itemsInCart, item, 'add');
    updateCartItemReducer(newCartItems);
  };

  // deduct quantity to item in cart
  const deductQty = (item: cartItemType) => {
    const newCartItems = changeQty(itemsInCart, item, 'deduct');
    updateCartItemReducer(newCartItems);
  };

  // remove item in cart
  const removeItemInCart = (item: cartItemType) => {
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
