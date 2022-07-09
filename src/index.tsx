import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './main.css';
import { HashRouter } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './utils/firebase/stripe.utils';
import { PaymentIntentResult } from '@stripe/stripe-js';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
