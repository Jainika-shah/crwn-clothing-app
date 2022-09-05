import CheckoutCard from "../../components/checkout-card/checkout-card";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import './checkout.scss';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';
import PaymentForm from "../../components/payment-form/payment-form";
import { useDispatch } from 'react-redux';
import { setCartTotal } from "../../store/cart/cart-action";

const CheckOut = () => {
  const dispatch = useDispatch();

  // const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems)
  
  const total = cartItems.reduce((acc, elm) => {
    return acc + elm.price * elm.quantity;
  }, 0) 
  dispatch(setCartTotal(total))  

  return (
    <div className="checkout-container">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

      {cartItems.map((item) => (
        <CheckoutCard key={item.id} product={item} />
      ))}

      <span className="total">Total: ${total} </span>
      <PaymentForm/>
    </div>
  );
};

export default CheckOut;
