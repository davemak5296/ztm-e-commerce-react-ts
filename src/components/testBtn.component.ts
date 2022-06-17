import { backgroundColor, classnames as clsx, cursor, width } from "tailwindcss-classnames";

const button = clsx(width("w-full"), cursor("cursor-pointer"));

const alertBtn = clsx(button, backgroundColor("bg-red-100"));

const success = clsx(
  button,
  backgroundColor({
    ["bg-red-100"]: true,
  })
);
