import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { directoryProps } from "../types";
import CategoryItem from "./cat-item.component";

const Directory = (props: directoryProps) => {
  const categories = props.categories;
  const { closeCart } = useContext(CartContext);

  return (
    <main onClick={closeCart} className="flex w-full flex-wrap justify-between">
      {categories.map((cat) => (
        <CategoryItem key={cat.id} category={cat} />
      ))}
    </main>
  );
};

export default Directory;
