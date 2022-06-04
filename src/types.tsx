import { ChangeEventHandler, ReactNode } from "react";
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
  onClick?: () => void;
}

export interface btnTypes {
  [key: string]: string;
}

export interface userContextType {
  currUser: User | null;
  setCurrUser: (currUser: User | null) => User | null | void;
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
  setPdt: (pdt: productsType[]) => productsType[] | void;
}
