import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeError } from '@stripe/stripe-js';
import * as React from 'react';
import { useEffect } from 'react';
import { StripeContext } from '../../context/stripe.context';
import { StripeContextType } from '../../types';
import Button from '../Button/button.component';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { clientSecret } = React.useContext(StripeContext) as StripeContextType;

  useEffect(() => {
    if (!stripe) return;

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent && paymentIntent.status) {
        case 'succeeded':
          alert('Payment succeeded!');
          break;
        case 'processing':
          alert('Your payment is processing.');
          break;
        case 'requires_payment_method':
          break;
        default:
          alert('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const paymentHandler: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:8888/cart',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      alert(error.message);
    } else {
      console.log(error.message);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <div className="flex h-[300px] flex-col items-center justify-center">
      <form className="h-[100px] min-w-[500px]" onSubmit={paymentHandler}>
        <h2>Credit Card Payment:</h2>
        <PaymentElement />
        <Button buttonType="inverted" type="submit">
          Pay now
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
