import './cart-dropdown.scss';
import Button from '../button/button';
import CartItem from '../cart-item/cart-item';
import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart-action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart-selector';

const CartDropdown = () => {
    // const { cartItems } = useContext(CartContext)
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const navigate = useNavigate()
    const goToCheckout = () => {
        navigate('/checkout')
        dispatch(setIsCartOpen())
    }
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>

                {
                    cartItems.length ? cartItems.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    )) : ( <span className='empty-cart'>Oops! Its an empty cart! </span> ) 
                }
            </div>
            <Button onClick={goToCheckout}> GO TO CHECKOUT </Button>
        </div>
    )
}

export default CartDropdown;