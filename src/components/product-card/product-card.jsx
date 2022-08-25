import './product-card.scss';
import Button from '../button/button';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useDispatch } from 'react-redux'
import { addItemToCart } from "../../store/cart/cart-action";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";

const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    // const { addItemToCart } = useContext(CartContext);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)


    const addItem = () => {
        dispatch(addItemToCart(cartItems, product))
        // addItemToCart(product)
    }
    // console.log("product-card: ", product)
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addItem}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;