import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { store } from './store/store';

// Component's Props
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

export interface cartItemProps {
  item: cartItemType;
}
export interface catPreviewProps {
  cat: string;
  products: productType[];
}

export type emptyObj = Record<string, never>;
export interface category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface productType {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export type cartItemType = productType & { qty: number };

export type categoriesMapType = Record<string, productType[]>;
export interface catalogType {
  title: string;
  items: productType[];
}
export interface btnTypes {
  default: string;
  google: string;
  inverted: string;
  defaultInDropDown: string;
  invertedInProductCard: string;
}

export interface userContextType {
  currUser: User | null;
  setCurrUser: (currUser: userContextType['currUser']) => void;
}

export type onAuthNextFnType = (user: User | null) => void;
export interface catContextType {
  categoriesMap: categoriesMapType;
  setCategoriesMap: (pdt: catContextType['categoriesMap']) => void;
}
export interface cartContextType {
  isCartOpen: boolean;
  setIsCartOpen: (bool: boolean) => void;
  closeCart: MouseEventHandler;
  itemsInCart: cartItemType[];
  addItemToCart: (pdt: productType) => void;
  addQty: (item: cartItemType) => void;
  deductQty: (item: cartItemType) => void;
  removeItemInCart: (item: cartItemType) => void;
  sumOfCartItems: number;
  // setSumOfCartItems: (sum: number) => void;
  cartTotal: number;
}

export type useParamsType = {
  category: string;
};

export interface cartState {
  isCartOpen: boolean;
  itemsInCart: cartItemType[];
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
  newCartItems: cartItemType[];
  newCartCount: number;
  newCartTotal: number;
}

export interface categoriesStates {
  categoriesArray: catalogType[];
  isLoading: boolean;
  error: Error | null;
}

export enum categoriesActionKind {
  SET_CATEGORIES = 'SET_CATEGORIES',
  FETCH_CATEGORIES_START = 'FETCH_CATEGORIES_START',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAIL = 'FETCH_CATEGORIES_FAIL',
}
export interface cartStateNew {
  isCartOpen: boolean;
  itemsInCart: cartItemType[];
}

export interface userState {
  currentUser: User | null;
  isLoading: boolean;
  error: unknown | null;
}
export interface grandStateType {
  categories: categoriesStates;
  cart: cartStateNew;
  user: userState;
}
export type AppDispatch = typeof store.dispatch;
