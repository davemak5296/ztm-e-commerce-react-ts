import { useContext } from "react";
import "../main.css";
import { ProductsContext } from "../contexts/products.context";

const Shop = () => {
  const { pdt } = useContext(ProductsContext);
  return (
    <div>
      {pdt.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
