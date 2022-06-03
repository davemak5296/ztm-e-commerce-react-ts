import Home from "./routes/home.component";
import Navigation from "./routes/navbar.component";
import Authentication from "./routes/authentication.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I am the Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
