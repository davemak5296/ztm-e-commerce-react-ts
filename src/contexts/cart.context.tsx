import { createContext, useState, ReactNode } from "react";
import { cartContextType } from "../types";

export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [currCart, setCurrCart] = useState<cartContextType["currCart"]>({
    isDropDown: false,
  });
  const value = { currCart, setCurrCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
