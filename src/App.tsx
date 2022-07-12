import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import Authentication from './routes/authentication.component';
import Cart from './routes/cart.component';
import Home from './routes/home.component';
import Navigation from './routes/navbar.component';
import Shop from './routes/shop.component';
import { SET_CATEGORIES } from './store/category/categories.reducer';
import { CHECK_USER_SESSION } from './store/user/user.reducer';
import { selectCurrentUser } from './store/user/user.selector';

const App = () => {
  const dispatch = useDispatch();
  const currUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(CHECK_USER_SESSION());
  }, []);

  useEffect(() => {
    dispatch(SET_CATEGORIES());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={currUser ? <Navigate to="/" /> : <Authentication />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
