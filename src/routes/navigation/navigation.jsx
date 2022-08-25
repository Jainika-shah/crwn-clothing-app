import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { UserContext } from "../../context/user";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { signOutUser } from "../../utils/firebase/firebase";
import { selectCurrentUser } from "../../store/user/user-selector";
import './navigation.scss';
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart";
import { useSelector } from "react-redux";
import { selectIsCartOpen } from "../../store/cart/cart-selector";

 const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)
  // const { currentUser } = useContext(UserContext);
  // const { isCartOpen } = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo className='logo'/>
          </div>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
                Shop
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={signOutUser}>Sign Out</span>
              ) : 
              <Link className="nav-link" to="/sign-in">
                Sign In
            </Link>
            }
            <CartIcon />
          </div>
          { isCartOpen && <CartDropdown /> }
        </div>
        <Outlet />
      </Fragment>
    );
  };


  export default Navigation;