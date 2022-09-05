import './button.scss';
const BUTTON_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted',
    emailSignIn: 'email-sign-in',
    disabledBtn: 'disabled-btn'
}

const Button = ({ children, buttonType, isLoading,...otherProps }) => {
    // console.log("isloading", isLoading)
    return (
        <button disabled={isLoading} className={`button-container ${BUTTON_CLASSES[buttonType]} ${isLoading ? 'disabled-btn' : '' }`} {...otherProps}> {children} </button>
    )
}

export default Button;