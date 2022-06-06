import { MouseEventHandler, useContext } from "react";
import { productsType } from "../types";
import Button from "./button.component";
import { CartContext } from "../contexts/cart.context";

const PdtCard = ({ product }: { product: productsType }) => {
  const { id, name, imageUrl, price } = product;
  const { currCart, setCurrCart } = useContext(CartContext);
  const { isDropDown, itemInCart } = currCart;
  let { sumOfItem } = currCart;

  const addHandler: MouseEventHandler<HTMLButtonElement> = () => {
    let isAdded = false;
    sumOfItem += 1;

    currCart.itemInCart.some((e, i) => {
      const { id: addedPdtId } = e;
      if (id == addedPdtId) {
        isAdded = true;
        itemInCart[i]["qty"] += 1;
        return true;
      }
    });

    if (!isAdded) {
      itemInCart.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        price: price,
        qty: 1,
      });
      setCurrCart({ isDropDown, itemInCart, sumOfItem });
    } else {
      setCurrCart({ isDropDown, itemInCart, sumOfItem });
    }
  };

  return (
    <div className="group relative flex h-[350px] flex-col items-center">
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
        clickHandler={addHandler}
      >
        {/* <Button cls="absolute bottom-[40px]" type="button" buttonType="inverted"> */}
        Add to cart
      </Button>
    </div>
  );
};

export default PdtCard;
