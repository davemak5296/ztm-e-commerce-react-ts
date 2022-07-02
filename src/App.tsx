import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication.component';
import Cart from './routes/cart.component';
import Home from './routes/home.component';
import Navigation from './routes/navbar.component';
import Shop from './routes/shop.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'user/CHECK_USER_SESSION' });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
