import { createContext, ReactNode, useState, useEffect } from 'react';
import { getCategoriesAndDocs } from '../utils/firebase/firebase.utils';
import { catContextType, categoriesMapType, emptyObj } from '../types';
// import PRODUCT from "../shop-data.json";
// import SHOP_DATA from "../shop-data";

// export const CategoriesContext = createContext<productsContextType | Record<string, never>>({});
export const CategoriesContext = createContext<catContextType | emptyObj>({});
export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categoriesMap, setCategoriesMap] = useState<categoriesMapType | emptyObj>({});

  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     const newCatMap = await getCategoriesAndDocs();
  //     console.log(newCatMap);
  //     setCategoriesMap(newCatMap);
  //   };
  //   getCategoriesMap();
  // }, []);

  // useEffect(() => {
  //   addCollectionAndDocs("categories", SHOP_DATA);
  // });
  const value = { categoriesMap, setCategoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
