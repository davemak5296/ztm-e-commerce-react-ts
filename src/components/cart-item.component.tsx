import { cartItemType } from "../types";

const CartItem = (props: cartItemType) => {
  const { item } = props;
  const { id, name, imageUrl, price, qty } = item;
  return (
    <section className="flex border-b border-solid border-zinc-400 pb-5">
      <div className="w-[24%]">
        <img className="w-full" src={imageUrl} alt={name} />
      </div>
      <div className="w-[17%]">{name}</div>
      <div className="w-[17%]">{qty}</div>
      <div className="w-[17%]">{price}</div>
      <div className="w-[17%]">{`\$${price * qty}`}</div>
      <div className="w-[8%]">X</div>
    </section>
  );
};

export default CartItem;
