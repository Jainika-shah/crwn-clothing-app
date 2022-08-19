import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
} from "../../utils/firebase/firebase";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-up-form.scss";

const SignUpForm = () => {
  const defaultFieldsValue = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const resetFields = () => {
    setFormFields(defaultFieldsValue);
  };

  const [formFields, setFormFields] = useState(defaultFieldsValue);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (confirmPassword === password) {
      try {
        const response = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        if (response) {
          await createUserDocument({
            ...response.user,
            displayName: displayName,
          });
        }
        alert("Signed up Succesfully!");
        resetFields();
      } catch (error) {
        alert(error.code);
      }
    } else {
      alert("Passwords do not macth!");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleInputChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleInputChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType="google" type="submit">
          Sign Up{" "}
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
