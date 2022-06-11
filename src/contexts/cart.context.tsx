import { createContext, MouseEventHandler, ReactNode, useEffect, useState } from "react";
import { cartContextType, itemInCartType, productsType } from "../types";

const addCartItem = (cartItems: itemInCartType[], pdtToAdd: productsType) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === pdtToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === pdtToAdd.id ? { ...cartItem, qty: cartItem.qty + 1 } : cartItem
    );
  }
  return [...cartItems, { ...pdtToAdd, qty: 1 }];
};

const changeQty = (cartItems: itemInCartType[], tgtItem: itemInCartType, ops: "add" | "deduct") => {
  if (ops == "add") {
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

const removeItem = (cartItems: itemInCartType[], tgtItem: itemInCartType) =>
  cartItems.filter((cartItem) => cartItem.id !== tgtItem.id);

export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<itemInCartType[]>([] as itemInCartType[]);
  const [sumOfCartItems, setSumOfCartItems] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // close cart drop down
  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsCartOpen(false);
  };

  // add new item to cart
  const addItemToCart = (pdt: productsType) => {
    setItemsInCart(addCartItem(itemsInCart, pdt));
  };

  // add quantity to item in cart
  const addQty = (item: itemInCartType) => {
    setItemsInCart(changeQty(itemsInCart, item, "add"));
  };

  // deduct quantity to item in cart
  const deductQty = (item: itemInCartType) => {
    setItemsInCart(changeQty(itemsInCart, item, "deduct"));
  };

  const removeItemInCart = (item: itemInCartType) => {
    setItemsInCart(removeItem(itemsInCart, item));
  };

  // calculate and return total value of items in cart
  const getTotal = (cartItems: itemInCartType[]) => {
    const total = cartItems.reduce((tt, cartItem) => tt + cartItem.qty * cartItem.price, 0);
    return total;
  };

  useEffect(() => {
    const newCartCount = itemsInCart.reduce((total, cartItem) => total + cartItem.qty, 0);
    setSumOfCartItems(newCartCount);
  }, [itemsInCart]);

  useEffect(() => {
    const newCartTotal = itemsInCart.reduce(
      (total, cartItem) => total + cartItem.qty * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [itemsInCart]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    closeCart,
    itemsInCart,
    addItemToCart,
    addQty,
    deductQty,
    removeItemInCart,
    sumOfCartItems,
    setSumOfCartItems,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
