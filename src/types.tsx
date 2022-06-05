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
  onClick?: () => void;
}

export interface btnTypes {
  [key: string]: string;
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

export interface cartContextType {
  currCart: {
    isDropDown: boolean;
    // other: string;
  };
  setCurrCart: (currCart: cartContextType["currCart"]) => void;
  // setCurrCart: (currCart: cartContextType["currCart"]) => void;
}
