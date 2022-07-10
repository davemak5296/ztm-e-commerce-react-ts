import { Elements } from '@stripe/react-stripe-js';
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Button from '../components/Button/button.component';
import CartItem from '../components/CartItem/cart-item.component';
import PaymentForm from '../components/PaymentForm/payment-form';
import { StripeContext } from '../context/stripe.context';
import { selectCartItems, selectCartTotal } from '../store/cart/cart.selector';
import { StripeContextType } from '../types';
import { stripePromise } from '../utils/firebase/stripe.utils';

const titles = ['Product', 'Description', 'Quantity', 'Price', 'Sub-total', 'Remove'];

const Cart: React.FC = () => {
  const itemsInCart = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const { clientSecret, setClientSecret } = React.useContext(StripeContext) as StripeContextType;
  const [isCheckout, setIsCheckOut] = React.useState(false);

  const handleCheckOut: React.MouseEventHandler = async (e) => {
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }),
    })
      .then((res) => res.json())
      .then((res) => setClientSecret(res.paymentIntent['client_secret']))
      .catch((error) => console.log(error));

    setIsCheckOut(!isCheckout);
  };

  const appearance = {
    theme: 'stripe' as 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

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
      {!isCheckout && (
        <Button buttonType="inverted" type="button" clickHandler={handleCheckOut}>
          Checkout
        </Button>
      )}
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm />
        </Elements>
      )}
    </main>
  );
};

export default Cart;
