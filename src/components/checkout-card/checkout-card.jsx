import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout-card.scss";
import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart } from "../../store/cart/cart-action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";


const CheckoutCard = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  // const { addItemToCart, removeItemFromCart } = useContext(CartContext);


  const incrementQuantity = () => {
    // addItemToCart(product);
    dispatch(addItemToCart(cartItems, product))
  };

  const decrementQuantity = () => {
    // removeItemFromCart(product);
    dispatch(removeItemFromCart(cartItems, product))
  };

  const deleteCartItem = () => {
    // removeItemFromCart({ ...product, quantity: 0 });
    dispatch(removeItemFromCart(cartItems, { ...product, quantity: 0 }))

  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={decrementQuantity}> &lt; </div>
        <span className="value"> {quantity} </span>
        <div className="arrow" onClick={incrementQuantity}> &gt; </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteCartItem}> &#10060; </div>
    </div>
  );
};

export default CheckoutCard;
