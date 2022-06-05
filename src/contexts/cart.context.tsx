import { createContext, useState, ReactNode } from "react";
import { cartContextType, itemInCartType } from "../types";

export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currCart, setCurrCart] = useState<cartContextType["currCart"]>({
    itemInCart: [] as itemInCartType[],
    isDropDown: false,
    sumOfItem: 0,
  });
  const value = { currCart, setCurrCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
