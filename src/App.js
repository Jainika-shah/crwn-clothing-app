import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Auth from "./routes/auth/auth";
import Shop from "./routes/shop/shop";
import CheckOut from "./routes/checkout/checkout";
import { useEffect } from "react";
import { onAuthStateChangedListener, createUserDocument } from "./utils/firebase/firebase"
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => { 
    // console.log("app.js")
    const unsubsciber = onAuthStateChangedListener((user) => {
        dispatch(setCurrentUser(user));
        if(user) createUserDocument(user);
    });
    return unsubsciber;
}, [dispatch])

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
