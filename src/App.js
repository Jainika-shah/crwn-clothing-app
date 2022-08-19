import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Auth from "./routes/auth/auth";
import Shop from "./routes/shop/shop";
import CheckOut from "./routes/checkout/checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="sign-in" element={<Auth />} />
        <Route path="checkout" element={<CheckOut /> } />
      </Route>
    </Routes>
  );
};

export default App;
