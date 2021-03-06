import * as React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectCartTotal, selectCartItems } from '../store/cart/cart.selector';
import CartItem from '../components/CartItem/cart-item.component';
import PaymentForm from '../components/PaymentForm/payment-form';

const titles = ['Product', 'Description', 'Quantity', 'Price', 'Sub-total', 'Remove'];

const Cart: React.FC = () => {
  const itemsInCart = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <motion.main
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        ease: 'easeInOut',
        duration: 0.3,
      }}
      className="mx-auto mt-12 flex w-[800px] flex-col items-center"
    >
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
      <PaymentForm />
    </motion.main>
  );
};

export default React.memo(Cart);
