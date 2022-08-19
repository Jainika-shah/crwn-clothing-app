import { useState, useEffect } from "react";
import {
  signInAuthWithEmailAndPassword,
  signWithGooglePopup,
  createUserDocument,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import { auth } from "../../utils/firebase/firebase";
import { getRedirectResult } from "firebase/auth";

const SignInForm = () => {
  useEffect(() => {
    async function createUser() {
      const response = await getRedirectResult(auth);
      if (response) await createUserDocument(response.user);
    }
    createUser();
  }, []);

  const defaultFieldsValue = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFieldsValue);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      if (response) alert("Signed In Succesfully!");      
      resetFields();
    } catch (error) {
      alert(error.code);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInwthGoogle = async () => {
    await signWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <h1>Already have an account?</h1>
        <p>Sign in with your email and password</p>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleInputChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleInputChange}
          name="password"
          value={password}
        />

        <Button buttonType="emailSignIn" type="submit" onClick={handleSubmit}>
          Sign In with Email{" "}
        </Button>
        <div className="buttons-container">
          <Button type="button" buttonType="google" onClick={signInwthGoogle}>
            Sign In With Google (Popup)
          </Button>

          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogleRedirect}
          >
            Sign In With Google (Redirect)
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
