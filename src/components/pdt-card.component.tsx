import { MouseEventHandler, useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { productsType } from "../types";
import Button from "./button.component";

const PdtCard = ({ product }: { product: productsType }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart, setIsCartOpen, closeCart } = useContext(CartContext);

  const addPdtToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    addItemToCart(product);
    setIsCartOpen(true);
  };

  return (
    <div onClick={closeCart} className="group relative flex h-[350px] flex-col items-center">
      <img
        className="mb-1 h-[95%] w-full object-cover group-hover:opacity-80"
        src={imageUrl}
        alt={name}
      />
      <div className="flex w-full justify-between">
        <span className="w-[90%]">{name}</span>
        <span className="w-[10%]">{price}</span>
      </div>
      <Button
        varCls="hidden w-[80%] absolute top-[255px] group-hover:flex group-hover:opacity-[.85] "
        type="button"
        buttonType="inverted"
        clickHandler={addPdtToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default PdtCard;
