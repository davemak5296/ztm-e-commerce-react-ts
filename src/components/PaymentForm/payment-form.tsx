import * as React from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Button from '../Button/button.component';
import { PaymentIntentResult, StripeCardElement } from '@stripe/stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { paymentIntent }: PaymentIntentResult = await fetch(
      '/.netlify/functions/create-payment-intent',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 10000 }),
      }
    ).then((res) => res.json());

    const clientSecret = paymentIntent?.client_secret as string;
    console.log(clientSecret);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement) as StripeCardElement,
        billing_details: {
          name: 'Dave Mak',
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment succeed!');
      }
    }
  };

  return (
    <div className="flex h-[300px] flex-col items-center justify-center">
      {/* <div className="flex h-[300px] flex-col items-center justify-center"> */}
      <form className="h-[100px] min-w-[500px]" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <CardElement />
        <Button buttonType="inverted" type="submit">
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
