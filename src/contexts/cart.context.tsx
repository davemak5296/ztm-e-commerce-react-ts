import { createContext, useState, ReactNode } from "react";
import { cartContextType, itemInCartType, productsType } from "../types";

const addCartItem = (
  cartitems: itemInCartType[],
  pdtToAdd: productsType,
  sum: number,
  setSum: (newSum: number) => void
) => {
  const { id, name, imageUrl, price } = pdtToAdd;
  let isAdded = false;

  setSum(sum + 1);

  cartitems.some((e, i) => {
    const { id: addedPdtId } = e;
    if (id == addedPdtId) {
      isAdded = true;
      cartitems[i]["qty"] += 1;
      return true;
    }
  });

  if (!isAdded) {
    cartitems.push({
      id: id,
      name: name,
      imageUrl: imageUrl,
      price: price,
      qty: 1,
    });

    return cartitems;
  } else {
    return cartitems;
  }
};
export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<itemInCartType[]>([] as itemInCartType[]);
  const [sumOfCartItems, setSumOfCartItems] = useState(0);

  const addItemToCart = (pdtToAdd: productsType) => {
    setItemsInCart(addCartItem(itemsInCart, pdtToAdd, sumOfCartItems, setSumOfCartItems));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    itemsInCart,
    addItemToCart,
    sumOfCartItems,
    setSumOfCartItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
