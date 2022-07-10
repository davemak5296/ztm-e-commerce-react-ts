import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { store } from './store/store';

// Component's Props
export interface DirectoryProps {
  categories: Category[];
}
export interface CategoryItemProps {
  category: Category;
}
export interface FormInputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
  required: boolean;
}

export interface BtnProps {
  children: ReactNode;
  type: 'button' | 'reset' | 'submit' | undefined;
  buttonType: keyof BtnVariants;
  clickHandler?: MouseEventHandler | (() => void);
  isLoading?: boolean;
}

export interface PdtCardProps {
  product: Product;
}
export interface CartItemProps {
  item: CartItem;
}
export interface CatPreviewProps {
  cat: string;
  products: Product[];
}

export type EmptyObj = Record<string, never>;
export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export type CartItem = Product & { qty: number };

export type CategoriesMap = Record<string, Product[]>;
export interface Catalog {
  title: string;
  items: Product[];
}
export interface BtnVariants {
  default: string;
  google: string;
  inverted: string;
  defaultInDropDown: string;
  invertedInProductCard: string;
}

export type OnAuthNextFnType = (user: User | null) => void;
export type UseParams = {
  category: string;
};

export interface CategoriesState {
  categoriesArray: Catalog[];
  isLoading: boolean;
  error: Error | null;
}

export interface CartState {
  isCartOpen: boolean;
  itemsInCart: CartItem[];
}

export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: unknown | null;
}
export interface BaseState {
  categories: CategoriesState;
  cart: CartState;
  user: UserState;
}
export type AppDispatch = typeof store.dispatch;
