import './cart-icon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart-action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';

const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    const itemCount = cartItems.reduce((acc,elm) => {
        return elm.quantity + acc;
    },0)

    const toggleDdl = () => {
        // setIsCartOpen(!isCartOpen);
        dispatch(setIsCartOpen())
    }
    return (
        <div className='cart-icon-container' onClick={toggleDdl}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

export default CartIcon;