import Home from "./routes/home.component";
import Navigation from "./routes/navbar.component";
import Shop from "./routes/shop.component";
import Authentication from "./routes/authentication.component";
import { Routes, Route } from "react-router-dom";
import Cart from "./routes/cart.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default App;
