import { ChangeEventHandler, ReactNode } from "react";

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
}

export interface btnTypes {
  [key: string]: string;
}
