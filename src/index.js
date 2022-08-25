import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./context/user";
// import { ProductsProvider } from "./context/products";
// import { DropdownProvider } from "./context/cart";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import  Loading  from './components/Loading/loading';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={<Loading/>} persistor={persistor}>
    <BrowserRouter>
      {/* <UserProvider> */}
        {/* <ProductsProvider> */}
          {/* <DropdownProvider> */}
            <App />
          {/* </DropdownProvider> */}
        {/* </ProductsProvider> */}
      {/* </UserProvider> */}
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
