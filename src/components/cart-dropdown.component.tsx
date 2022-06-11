import { MouseEventHandler, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/cart.context";
import Button from "./button.component";

const CartDropDown = () => {
  const { itemsInCart } = useContext(CartContext);
  const navigate = useNavigate();

  const navHandler: MouseEventHandler = () => {
    navigate("/cart");
  };

  return (
    <div className="absolute top-[90px] right-[40px] z-[1] flex h-[340px] w-60 flex-col border border-solid border-black bg-white p-5">
      <div className="flex h-[240px] flex-col overflow-y-scroll bg-white">
        {/* items */}
        {itemsInCart.map(({ id, name, imageUrl, price, qty }) => (
          <section key={id} className="mb-3.5 flex">
            <img className="w-[30%]" src={imageUrl} alt={name} />
            <div className="flex w-[70%] flex-col items-start justify-center py-2.5 px-5 text-xs">
              <span>{name}</span>
              <span>{`${qty}x\$${price}`}</span>
            </div>
          </section>
        ))}
      </div>

      <Button clickHandler={navHandler} varCls="w-full mt-auto" type="button" buttonType="default">
        GO TO CHECKOUT
      </Button>
      {/* <Link to="cart">GO TO CHECKOUT</Link> */}
    </div>
  );
};

export default CartDropDown;
