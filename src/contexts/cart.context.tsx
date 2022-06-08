import { createContext, useState, ReactNode, MouseEventHandler } from "react";
import { cartContextType, itemInCartType, productsType } from "../types";

const addCartItem = (
  cartitems: itemInCartType[],
  pdtToAdd: productsType,
  sum: number,
  setSum: (newSum: number) => void
) => {
  let isAdded = false;

  setSum(sum + 1);

  cartitems.some((itemInCart, i) => {
    if (pdtToAdd.id == itemInCart.id) {
      isAdded = true;
      cartitems[i]["qty"] += 1;
      return true;
    }
  });

  if (!isAdded) {
    cartitems.push({ ...pdtToAdd, qty: 1 });
    return cartitems;
  }

  return cartitems;
};
export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<itemInCartType[]>([] as itemInCartType[]);
  const [sumOfCartItems, setSumOfCartItems] = useState(0);

  const addItemToCart = (pdtToAdd: productsType) => {
    setItemsInCart(addCartItem(itemsInCart, pdtToAdd, sumOfCartItems, setSumOfCartItems));
  };

  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsCartOpen(false);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    closeCart,
    itemsInCart,
    addItemToCart,
    sumOfCartItems,
    setSumOfCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
