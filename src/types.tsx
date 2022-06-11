import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";
import { User } from "firebase/auth";
export interface category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface directoryProps {
  categories: category[];
}
export interface categoryItemProps {
  category: category;
}

export interface formInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  required: boolean;
}

export interface btnProps {
  children: ReactNode;
  type: "button" | "reset" | "submit" | undefined;
  buttonType: string;
  varCls?: string;
  clickHandler?: MouseEventHandler | (() => void);
}

export interface btnTypes {
  [key: string]: string;
}

export interface cartItemType {
  item: itemInCartType;
}
export interface userContextType {
  currUser: User | null;
  setCurrUser: (currUser: userContextType["currUser"]) => void;
}

export type onAuthNextFnType = (user: User | null) => void;
export interface productsType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export interface productsContextType {
  pdt: productsType[];
  setPdt: (pdt: productsContextType["pdt"]) => void;
}

export interface pdtCardType {
  product: productsType;
}

export type itemInCartType = productsType & { qty: number };
export interface cartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (bool: boolean) => void;
  closeCart: MouseEventHandler;
  itemsInCart: itemInCartType[];
  addItemToCart: (pdt: productsType) => void;
  addQty: (item: itemInCartType) => void;
  deductQty: (item: itemInCartType) => void;
  removeItemInCart: (item: itemInCartType) => void;
  sumOfCartItems: number;
  setSumOfCartItems: (sum: number) => void;
  getTotal: (cartitems: itemInCartType[]) => number;
}
