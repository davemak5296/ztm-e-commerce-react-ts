import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { StripeContext } from './context/stripe.context';
import Authentication from './routes/authentication.component';
import Cart from './routes/cart.component';
import Home from './routes/home.component';
import Navigation from './routes/navbar.component';
import Shop from './routes/shop.component';
import { CHECK_USER_SESSION } from './store/user/user.reducer';
import { selectCurrentUser } from './store/user/user.selector';
import { StripeContextType } from './types';

const App = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(selectCurrentUser);
  const { clientSecret, setClientSecret } = useContext(StripeContext) as StripeContextType;

  useEffect(() => {
    dispatch(CHECK_USER_SESSION());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={currUser ? <Navigate to="/" /> : <Authentication />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
