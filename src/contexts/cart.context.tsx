import { createContext, MouseEventHandler, ReactNode, useState } from "react";
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

const chgQty = (
  cartItems: itemInCartType[],
  tgtItem: itemInCartType,
  ops: "add" | "deduct",
  sum: number,
  setSum: (newSum: number) => void
) => {
  if (ops == "add") {
    setSum(sum + 1);
    cartItems.some((itemInCart, i) => {
      if (tgtItem.id == itemInCart.id) {
        cartItems[i]["qty"] += 1;
        return true;
      }
    });
  } else {
    setSum(sum - 1);
    cartItems.some((itemInCart, i) => {
      if (tgtItem.id == itemInCart.id) {
        if (cartItems[i]["qty"] > 1) {
          cartItems[i]["qty"] -= 1;
          return true;
        } else if (cartItems[i]["qty"] == 1) {
          cartItems.splice(i, 1);
          return true;
        }
      }
    });
  }

  return cartItems;
};

const removeItem = (
  cartItems: itemInCartType[],
  tgtItem: itemInCartType,
  sum: number,
  setSum: (newSum: number) => void
) => {
  cartItems.some((itemInCart, i) => {
    if (tgtItem.id == itemInCart.id) {
      setSum(sum - itemInCart.qty);
      cartItems.splice(i, 1);
      return true;
    }
  });

  return cartItems;
};

export const CartContext = createContext<cartContextType | Record<string, never>>({});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemsInCart, setItemsInCart] = useState<itemInCartType[]>([] as itemInCartType[]);
  const [sumOfCartItems, setSumOfCartItems] = useState(0);

  // close cart drop down
  const closeCart: MouseEventHandler = (e) => {
    e.stopPropagation();
    setIsCartOpen(false);
  };

  // add new item to cart
  const addItemToCart = (pdt: productsType) => {
    setItemsInCart(addCartItem(itemsInCart, pdt, sumOfCartItems, setSumOfCartItems));
  };

  // add quantity to item in cart
  const addQty = (item: itemInCartType) => {
    setItemsInCart(chgQty(itemsInCart, item, "add", sumOfCartItems, setSumOfCartItems));
  };

  // deduct quantity to item in cart
  const deductQty = (item: itemInCartType) => {
    setItemsInCart(chgQty(itemsInCart, item, "deduct", sumOfCartItems, setSumOfCartItems));
  };

  const removeItemInCart = (item: itemInCartType) => {
    setItemsInCart(removeItem(itemsInCart, item, sumOfCartItems, setSumOfCartItems));
  };

  // calculate and return total value of items in cart
  const getTotal = (cartItems: itemInCartType[]) => {
    let total = 0;
    cartItems.forEach((e) => {
      total += e.qty * e.price;
    });
    return total;
  };

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
    getTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
