import { createContext, ReactNode, useState } from "react";
import { productsType, productsContextType } from "../types";
import PRODUCT from "../shop-data.json";

export const ProductsContext = createContext<productsContextType | Record<string, never>>({});
export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [pdt, setPdt] = useState<productsType[]>(PRODUCT);
  const value = { pdt, setPdt };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
