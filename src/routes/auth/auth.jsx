
import SignUpForm from "../../components/sign-up-form/sign-up-form"
import SignInForm from "../../components/sign-in-form/sign-in-form";
import './auth.scss';
const Auth = () => {
    return (
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}
export default Auth