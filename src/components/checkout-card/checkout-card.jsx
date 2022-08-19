import { useContext } from "react";
import { CartContext } from "../../context/cart";
import "./checkout-card.scss";

const CheckoutCard = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const incrementQuantity = () => {
    addItemToCart(product);
  };
  const decrementQuantity = () => {
    removeItemFromCart(product);
  };

  const deleteCartItem = () => {
    removeItemFromCart({ ...product, quantity: 0 });
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
