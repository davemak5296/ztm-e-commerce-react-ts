import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication.component';
import Cart from './routes/cart.component';
import Home from './routes/home.component';
import Navigation from './routes/navbar.component';
import Shop from './routes/shop.component';
import { SET_USER } from './store/user/user.reducer';
import { CHECK_USER_SESSION } from './store/user/user.reducer';
import { signOutUser } from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // signOutUser();
    dispatch({ type: 'user/CHECK_USER_SESSION' });
    // const unsub = onAuthStateChangedListener((user) => {
    //   console.log(user);
    //   if (user) {
    //     createUserDocFromAuth(user);
    //   }
    //   dispatch(SET_USER(user));
    // });
    // return unsub;
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
