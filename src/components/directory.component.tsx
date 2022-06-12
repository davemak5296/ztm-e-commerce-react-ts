import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { directoryProps } from "../types";
import DirectoryItem from "./directory-item";

const Directory = (props: directoryProps) => {
  const categories = props.categories;
  const { closeCart } = useContext(CartContext);

  return (
    <main onClick={closeCart} className="flex w-full flex-wrap justify-between">
      {categories.map((cat) => (
        <DirectoryItem key={cat.id} category={cat} />
      ))}
    </main>
  );
};

export default Directory;
