import * as React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '../Button/button.component';
import { PaymentIntentResult, StripeCardElement } from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import styles from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = React.useState(false);

  const paymentHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    if (amount === 0) {
      alert('Your cart is empty!');
      return;
    }

    setIsProcessing(true);

    const { paymentIntent }: PaymentIntentResult = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      }
    ).then((res) => res.json());

    const clientSecret = paymentIntent?.client_secret as string;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: currUser ? (currUser.displayName as string) : 'Guest',
        },
      },
    });

    setIsProcessing(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment succeed!');
      }
    }
  };
  const spinner = (
    <div className="h-60vh flex w-full items-center justify-center">
      <div className={styles.spinner}></div>
    </div>
  );

  return (
    <div className="flex h-[300px] flex-col items-center justify-center">
      {/* <div className="flex h-[300px] flex-col items-center justify-center"> */}
      <form className="h-[100px] min-w-[500px]" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button isLoading={isProcessing} buttonType="inverted" type="submit">
          {isProcessing ? spinner : 'Pay now'}
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
