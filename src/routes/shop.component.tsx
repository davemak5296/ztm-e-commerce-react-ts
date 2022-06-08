import { useContext } from "react";
import PdtCard from "../components/pdt-card.component";
import { ProductsContext } from "../contexts/products.context";
import { CartContext } from "../contexts/cart.context";
import "../main.css";

const Shop = () => {
  const { pdt } = useContext(ProductsContext);
  const { closeCart } = useContext(CartContext);

  return (
    <main className="grid w-full grid-cols-4 gap-x-[10px] gap-y-[50px]">
      {pdt.map((product) => (
        <PdtCard key={product.id} product={product} />
      ))}
    </main>
  );
};

export default Shop;
