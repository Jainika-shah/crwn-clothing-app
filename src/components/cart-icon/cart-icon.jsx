import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

    const itemCount = cartItems.reduce((acc,elm) => {
        return elm.quantity + acc;
    },0)

    const toggleDdl = () => {
        setIsCartOpen(!isCartOpen);
    }
    return (
        <div className='cart-icon-container' onClick={toggleDdl}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;