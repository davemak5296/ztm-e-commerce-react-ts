import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";
import { cartItemType } from "../types";
import CartItem from "../components/cart-item.component";

const titles = ["Product", "Description", "Quantity", "Price", "Sub-total", "Remove"];

const Cart = () => {
  const { itemsInCart } = useContext(CartContext);

  return (
    <main className="mx-auto mt-12 w-[800px]">
      <section className="flex border-b border-solid border-zinc-400 pb-5">
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
      {/* <main className="mx-auto mt-12 grid w-[800px] grid-cols-[repeat(5,_minmax(0,_2fr))_1fr]"> */}
      {/* <section className="flex border-b border-solid border-zinc-400 pb-5">
        {tableTitles.map((e, i, a) => {
          if (i == 0) {
            return <CartTableTitle cls="w-[24%]">{e}</CartTableTitle>;
          } else if (i == a.length - 1) {
            return <CartTableTitle cls="w-[8%]">{e}</CartTableTitle>;
          } else {
            return <CartTableTitle cls="w-[17%]">{e}</CartTableTitle>;
          }
        })}
      </section> */}
    </main>
  );
};

export default Cart;
