import { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "./button.component";
import { CartContext } from "../contexts/cart.context";

const CartDropDown = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <div className="absolute top-[90px] right-[40px] z-[1] flex h-[340px] w-60 flex-col border border-solid border-black bg-white p-5">
      <div className="flex h-[240px] flex-col overflow-y-scroll bg-white">
        {/* items */}
        {itemsInCart.map(({ id, name, imageUrl, price, qty }) => (
          <section key={id} className="mb-3.5 flex">
            <img className="w-[30%]" src={imageUrl} alt="Brown Brim" />
            <div className="flex w-[70%] flex-col items-start justify-center py-2.5 px-5 text-xs">
              <span>{name}</span>
              <span>{`${qty}x\$${price}`}</span>
            </div>
          </section>
        ))}
      </div>

      <Button varCls="w-full mt-auto" type="button" buttonType="default">
        <Link to="cart">GO TO CHECKOUT</Link>
      </Button>
    </div>
  );
};

export default CartDropDown;
