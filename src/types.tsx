import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { User } from 'firebase/auth';

export type emptyObj = Record<string, never>;
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
  type: 'button' | 'reset' | 'submit' | undefined;
  buttonType: keyof btnTypes;
  clickHandler?: MouseEventHandler | (() => void);
}

export interface btnTypes {
  default: string;
  google: string;
  inverted: string;
  defaultInDropDown: string;
  invertedInProductCard: string;
}

export interface cartItemType {
  item: itemInCartType;
}
export interface userContextType {
  currUser: User | null;
  setCurrUser: (currUser: userContextType['currUser']) => void;
}

export type onAuthNextFnType = (user: User | null) => void;
export interface productsType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export type catsMapType = Record<string, productsType[]>;
export interface catContextType {
  categoriesMap: catsMapType;
  setCategoriesMap: (pdt: catContextType['categoriesMap']) => void;
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
  // setSumOfCartItems: (sum: number) => void;
  cartTotal: number;
}

export interface catalogType {
  title: string;
  items: productsType[];
}

export interface catPreviewPropType {
  cat: string;
  products: productsType[];
}

export type useParamsType = {
  category: string;
};

export interface cartStates {
  isCartOpen: boolean;
  itemsInCart: itemInCartType[];
  sumOfCartItems: number;
  cartTotal: number;
}

export enum cartActionKind {
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  SET_IS_CART_OPEN = 'SET_IS_CART_OPEN',
}
export interface cartAction {
  type: cartActionKind;
  payload: payloadType | boolean;
}

export interface payloadType {
  newCartItems: itemInCartType[];
  newCartCount: number;
  newCartTotal: number;
}

export interface categoriesStates {
  categoriesArray: catalogType[];
}

export interface grandStateType {
  categories: categoriesStates;
}
