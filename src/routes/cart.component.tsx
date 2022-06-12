import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import CartItem from "../components/cart-item.component";

const titles = ["Product", "Description", "Quantity", "Price", "Sub-total", "Remove"];

const Cart = () => {
  const { itemsInCart, cartTotal } = useContext(CartContext);

  return (
    <main className="mx-auto mt-12 flex w-[800px] flex-col items-center">
      <section className="flex w-full border-b border-solid border-zinc-400 pb-5">
        <div className="w-[24%]">{titles[0]}</div>
        <div className="w-[17%]">{titles[1]}</div>
        <div className="w-[17%]">{titles[2]}</div>
        <div className="w-[17%]">{titles[3]}</div>
        <div className="w-[17%]">{titles[4]}</div>
        <div className="w-[8%]">{titles[5]}</div>
      </section>
      {itemsInCart.map((e) => (
        <CartItem key={e.id} item={e} />
      ))}
      <div className="ml-auto mt-8 text-4xl">{`TOTAL: ${cartTotal}`}</div>
    </main>
  );
};

export default Cart;